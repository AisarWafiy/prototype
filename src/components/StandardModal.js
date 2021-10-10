import React from "react";
import { Button, Modal } from "react-bootstrap";

export const StandardModal = (props) => {
  const { title, children, footerBtn, onHide } = props;

  return (
    <>
      <Modal
        {...props}
        // size=""
        aria-labelledby="standard-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="standard-modal">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={onHide}>Close</Button> */}
          {footerBtn?.map((el, index) => (
            <Button
              key={index}
              variant="outline-primary"
              className="ml-1"
              onClick={el.onClick}
              disabled={el.disabled}
              {...el.props}
              style={{ minWidth: "4rem" }}
            >
              {el.label}
            </Button>
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
};
