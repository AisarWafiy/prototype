import React, { useEffect, useMemo, useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
import { TablePagination } from "./TablePagination";

export const CustomTable = (props) => {
  const { headers, rowData, tableContent, onClick, contentStyle } = props;

  const dummyData = [
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const ITEMS_PER_PAGE = 50;
  // const [ loader, showLoader, hideLoader ]

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => {
          setData(json);

          console.log(json);
        });
    };
    getData();
  }, []);

  const resultData = useMemo(() => {
    let computeData = data;

    setTotalItems(computeData.length);
    return computeData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage]);

  console.log("currentPage", currentPage);
  return (
    <>
      <TablePagination
        total={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <Table responsive bordered size="sm" className="table-container">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.map((el, index) => (
            <>
              <tr>
                <td>{el?.ID}</td>
                <td>{el?.Name}</td>
                <td>{el?.Author}</td>
                <td className="">
                  <div className="flex justify-center">
                    <span className="flex-end"> {el?.Released} </span>
                  </div>
                </td>
              </tr>
            </>
          ))} */}

          {resultData.map((data, index) => (
            <tr>
              <td>{data.id} </td>
              <td>{data.name} </td>
              <td>{data.email} </td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </>
  );
};
