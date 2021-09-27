import React from "react";
import { Table } from "react-bootstrap";

export const StandardTable = (props) => {
  const { headers, rowData, tableContent, onClick, contentStyle } = props;

  const tableBody = (rowHeader, rows) => {
    function getRow(row, rowHeader) {
      return (
        <tr>
          {rowHeader?.map((value, index) => {
            console.log("rowHeader---", row[value]);
            return (
              <td className={`${contentStyle}`} onClick={onClick} key={index}>
                {row[value]}
              </td>
            );
          })}
        </tr>
      );
    }

    return (
      <tbody>
        {rows &&
          rows?.map((value) => {
            return getRow(value, rowHeader);
          })}
      </tbody>
    );
  };
  console.log("tableContent", tableContent);
  return (
    <>
      <Table bordered hover size="sm" className="table-container">
        <thead className="table-header">
          <tr>
            {headers?.map((v, index) => (
              <th key={index}>{v}</th>
            ))}
          </tr>
        </thead>
        {tableBody(headers, rowData)}
        {/* <tbody>{tableContent}</tbody> */}
      </Table>
    </>
  );
};
