import React from "react";
import { Button } from "react-bootstrap";
import CardContent from "../../components/CardContent";

const ExerciseControl = () => {
  return (
    <>
      <div className="page-content-wrapper">
        <span>Exercise Status Control </span>{" "}
        <CardContent
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
        </CardContent>
        <Button
          variant="primary"
          className="ml-1"
          onClick={() => alert("testt")}
          style={{ minWidth: "4rem" }}
        >
          Test
        </Button>
      </div>
    </>
  );
};

export default ExerciseControl;
