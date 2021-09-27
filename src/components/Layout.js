import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router";
import { NavAppBar } from "./NavAppBar";
import Sidebar from "./SideBar";

export const Layout = (props) => {
  const { children } = props;

  let routeMatch = useRouteMatch({
    path: ["/login"],
    strict: true,
    sensitive: true,
  });

  return (
    <>
      <NavAppBar />
      <div
        className=" "
        style={{ display: "flex", backgroundColor: "#06108c" }}
      >
        {!routeMatch && <Sidebar />}
        <main
          className={`main-content ${!routeMatch ? "col-md-10" : "col-md-12"} `}
          style={{ borderTopLeftRadius: "1rem", backgroundColor: "white" }}
        >
          {React.cloneElement(children, {})}
        </main>
      </div>
    </>
  );
};
