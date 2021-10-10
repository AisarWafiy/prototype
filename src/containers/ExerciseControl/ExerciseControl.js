import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CardContent from "../../components/CardContent";
import { MultipleFileUpload } from "../../components/FileUpload/MultipleFileUpload";
import { StandardModal } from "../../components/StandardModal";

const ExerciseControl = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="page-content-wrapper">
        <span>Exercise Status Control </span>{" "}
        {/* <CardContent
          title="Current Exercise Status Details"
          subtitle="Exercise 1"
          footer
          footerStyle={{
            backgroundColor: "#c2d2f3",
            // borderTop: "3px solid #fefefe",
            // borderBottom: "3px solid #fefefe",
          }}
          footerBtn={[
            {
              label: "Start",
              onClick: () => {
                alert("Test");
                console.log("clicked");
              },
            },
            ,
            {
              label: "Stop",
              onClick: () => {},
              disabled: true,
            },
          ]}
          bodyStyle={{
            backgroundColor: "#c2d2f3",
            borderTop: "3px solid #fefefe",
            borderBottom: "3px solid #fefefe",
          }}
        >
          <div className="">
            <span>Exercise Status Control </span>{" "}
          </div>
          <div className="">
            <span>Exercise Status Control </span>{" "}
          </div>
        </CardContent> */}
        <StandardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onClose={() => setModalShow(false)}
          title={"Upload Files"}
          footerBtn={[
            { label: "Upload", onClick: () => setModalShow(false) },
            {
              label: "Close",
              onClick: () => {
                setModalShow(false);
              },
            },
          ]}
        >
          <MultipleFileUpload />
        </StandardModal>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Upload File
        </Button>
      </div>
    </>
  );
};

export default ExerciseControl;
