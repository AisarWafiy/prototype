import React, { useEffect, useState } from "react";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import { Loading } from "../../components/Loading";
import { StandardTable } from "../../components/StandardTable";

const ChannelControl = () => {
  const headers = ["ID", "Name", "Author", "Released"];
  const rowData = [
    {
      ID: "1",
      Name: "Test 1",
      Author: "Dummy 1 ",
      Released: "24/02/2021",
    },
    {
      ID: "2",
      Name: "Test 2",
      Author: "Dummy 2",
      Released: "5/02/2021",
    },
    {
      ID: "3",
      Name: "Test 3",
      Author: "Dummy 3",
      Released: "1/01/2021",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=100")
        .then((response) => response.json())
        .then((json) => {
          setData(json);

          console.log(json);
        });
    };
    getData();
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <div className="page-content-wrapper">
        <span>Channel Status Control </span>
        {/* <StandardTable
          headers={headers}
          rowData={rowData}
          //   tableContent={() => (
          //     <>
          //       <tbody>
          //         <tr>
          //           <td>1</td>
          //           <td>Mark</td>
          //           <td>Otto</td>
          //           <td>@mdo</td>
          //         </tr>
          //         <tr>
          //           <td>2</td>
          //           <td>Jacob</td>
          //           <td>Thornton</td>
          //           <td>@fat</td>
          //         </tr>
          //       </tbody>
          //     </>
          //   )}
        /> */}
        <CustomTable results={data} />
      </div>
    </>
  );
};

export default ChannelControl;
