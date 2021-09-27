import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CardContent = (props) => {
  const {
    children,
    title,
    subtitle,
    bodyStyle,
    footer,
    footerBtn,
    footerStyle,
  } = props;
  return (
    <>
      <div className="align-items-center " style={{ display: "flex" }}>
        <Card className="mb-4 mx-auto card">
          <Card.Header
            className="card-header"
            // style={{ backgroundColor: "#060b71" }}
          >
            <div className="">{title}</div>
            <div className="next-row">{subtitle}</div>
          </Card.Header>
          <Card.Body style={bodyStyle}>{children}</Card.Body>
          {footer && (
            <Card.Footer style={footerStyle}>
              {footerBtn?.map((el, index) => (
                <Button
                  key={index}
                  variant="primary"
                  className="ml-1"
                  onClick={el.onClick}
                  disabled={el.disabled}
                  {...el.props}
                  style={{ minWidth: "4rem" }}
                >
                  {el.label}
                </Button>
              ))}
            </Card.Footer>
          )}
        </Card>
      </div>
    </>
  );
};

export default CardContent;
