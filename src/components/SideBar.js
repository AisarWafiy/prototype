import React, { useState } from "react";
import { Col, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import { useHistory, useLocation, withRouter } from "react-router";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Side = (props) => {
  const [selectedKey, setSelectedKey] = useState("/");
  console.log("----selected----", selectedKey);
  const history = useHistory();
  const location = useLocation();

  console.log("history", history);
  console.log("location", location);

  const [clicked, setClicked] = useState(false);

  function clickEvent(e) {
    e.preventDefault();
    setClicked(!clicked);
  }

  const menuList = [
    {
      title: "Exercise Status Control",
      value: 0,
      path: "/",
      key: "/",
    },
    {
      title: "Channel Status Control",
      value: 1,
      path: "/channel-control",
      key: "/channel-control",
    },
    {
      title: "Exercise Control Parameters",
      value: 2,
      path: "/exercise-parameters",
      key: "/exercise-parameters",
      icon: <FontAwesomeIcon icon={faCaretRight} />,
      iconOpen: <FontAwesomeIcon icon={faCaretDown} />,
      children: [
        {
          title: "Exercise Parameters",
          value: 1,
          path: "/exercise-parameters1",
          key: "/exercise-parameters1",
          icon: <FontAwesomeIcon icon={faCaretDown} />,
        },
        {
          title: "Vehicle Category Parameters",
          value: 2,
          path: "/vehicle-category",
          key: "/vehicle-category",
          icon: <FontAwesomeIcon icon={faCaretDown} />,
        },
        {
          title: "Bank Parameters",
          value: 3,
          path: "/bank-parameters",
          key: "/bank-parameters",
          icon: <FontAwesomeIcon icon={faCaretDown} />,
        },
        {
          title: "Company Parameters",
          value: 4,
          path: "/company-parameters",
          key: "/company-parameters",
          icon: <FontAwesomeIcon icon={faCaretRight} />,
          children: [
            {
              title: "Address Profile",
              value: 4,
              path: "/address-profile",
              key: "/address-profile",
              icon: <FontAwesomeIcon icon={faCaretRight} />,
              children: [
                {
                  title: "Create",
                  value: 1,
                  path: "/create",
                  key: "/create",
                },
                {
                  title: "Edit",
                  value: 2,
                  path: "/edit",
                  key: "/edit",
                },
                {
                  title: "Delete",
                  value: 3,
                  path: "/delete",
                  key: "/delete",
                },
                {
                  title: "Activate",
                  value: 4,
                  path: "/activate",
                  key: "/activate",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Enquire Bid Status",
      value: 3,
      path: "/enquire-bid-status",
      key: "/enquire-bid-status",
    },
    {
      title: "Customer Log",
      value: 4,
      path: "/customer-log",
      key: "/customer-log",
    },
    {
      title: "Operations",
      value: 5,
      path: "/operations",
      key: "/operations",
    },
    {
      title: "Reports",
      value: 6,
      path: "/reports",
      key: "/reports",
    },
    {
      title: "Admin Reports",
      value: 7,
      path: "/admin-reports",
      key: "/admin-reports",
    },
    {
      title: "Change Password",
      value: 8,
      path: "/change-password",
      key: "/change-password",
    },
    {
      title: "Logout",
      value: 9,
      path: "/login",
      key: "/login",
    },
  ];

  const HandleSelect = (selected) => {
    setSelectedKey(selected);
  };
  return (
    <>
      <aside className="sidebar  col-md-2  ">
        <Nav
          className=" d-none d-md-block  "
          variant="pills"
          fill
          defaultActiveKey={location.pathname}
          onSelect={(selectedKey) => {
            console.log(`selected ${selectedKey}`);
            HandleSelect(selectedKey);
          }}
        >
          {/* <div className="sidebar-sticky"></div> */}
          {/* <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action >
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action >
            Link 2
          </ListGroup.Item>
          <ListGroup.Item action onClick={``}>
            This one is a button
          </ListGroup.Item>
        </ListGroup>
        , */}
          {menuList.map((el, index) => (
            <Nav.Item key={el.value}>
              <Nav.Link href={el.path} eventKey={el.key} className="text-white">
                <div className="d-flex">
                  <div
                    style={{ paddingRight: "5px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked(!clicked);
                    }}
                  >
                    {clicked ? el.iconOpen : el.icon}
                    {""}
                  </div>
                  <div>{el.title}</div>
                </div>
              </Nav.Link>
              {el.children?.map((el, index) => {
                {
                  if (clicked) {
                    return (
                      <Nav.Link
                        href={el.path}
                        eventKey={el.key}
                        className="text-white  d-block"
                      >
                        <div className="d-flex">
                          <div
                            style={{ paddingRight: "5px", paddingLeft: "30px" }}
                          >
                            {el.icon}
                            {""}
                          </div>
                          <div>{el.title}</div>
                        </div>
                      </Nav.Link>
                    );
                  }
                }
              })}
            </Nav.Item>
          ))}

          {/* <Nav.Item>
          <Nav.Link
            href="/channel-control"
            eventKey="/channel-control"
            className="text-white"
          >
            Channel Status Control
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" eventKey="" className="text-white">
            Exercise Control Parameters
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" eventKey="" className="text-white">
            Enquire Bid Status
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" eventKey="" className="text-white">
            Customer Log
          </Nav.Link>
        </Nav.Item> */}
        </Nav>
      </aside>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
