import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavAppBar } from "./NavAppBar";
import Sidebar from "./SideBar";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <NavAppBar />
      <div
        className=" "
        style={{ display: "flex", backgroundColor: "#06108c" }}
      >
        <Sidebar />
        <main
          className="main-content col-md-10 "
          style={{ borderTopLeftRadius: "1rem", backgroundColor: "white" }}
        >
          {React.cloneElement(children, {})}
        </main>
      </div>
    </>
  );
};
