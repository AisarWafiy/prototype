import React, { useState } from "react";
import { Col, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import { useHistory, useLocation, withRouter } from "react-router";

const Side = (props) => {
  const [selectedKey, setSelectedKey] = useState("/");
  console.log("----selected----", selectedKey);
  const history = useHistory();
  const location = useLocation();

  console.log("history", history);
  console.log("location", location);

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
                {el.title}
              </Nav.Link>
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
