import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <>
      <div
        className="align-items-center login-layout"
        style={{ display: "flex" }}
      >
        <Card className="mb-4 mx-auto login-card">
          <Card.Header
            className="login-header"
            // style={{ backgroundColor: "#060b71" }}
          >
            <div className="">Welcome To COE Open Bidding Admin Module</div>
          </Card.Header>
          <Form className="mx-2 mt-4 mb-4">
            <Form.Group
              as={Row}
              controlId="formHorizontalLoginID"
              className=" mx-1"
            >
              <Form.Label column sm="4">
                Login ID:
              </Form.Label>
              <Col sm="8">
                <Form.Control placeholder="Login ID" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formPlaintextPassword"
              className=" mx-1"
            >
              <Form.Label column sm="4">
                Password:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Button variant="primary" className="ml-5">
              Login
            </Button>
            <Button variant="primary" className="ml-1">
              Cancel
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
