import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavAppBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">UOB Bank Admin</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Test</Nav.Link>
              <Nav.Link href="#pricing">Features</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Test 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Test 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Test 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#settings">
                Settings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
