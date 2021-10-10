import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import { useSortableData } from "../../containers/helpers/hooks/useSortableData";
import { TableHeader } from "./TableHeader";
import { TablePagination } from "./TablePagination";
import { faEdit, faSlidersH, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

export const CustomTable = (props) => {
  const { results, resultItems } = props;

  const headersData = [
    {
      name: "IDs",
      field: "id",
      sortable: true,
    },
    {
      name: "Name",
      field: "name",
      sortable: true,
    },
    {
      name: "Email",
      field: "email",
      sortable: true,
    },
    {
      name: "Body",
      field: "body",
      sortable: false,
    },
    {
      name: "Action",
      field: "action",
      sortable: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(0);
  // const [sortData, setSortData] = useState({ field: "", order: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(null);

  const [content, setContent] = useState([]);

  // const ITEMS_PER_PAGE = itemsPerPage;

  const {
    items,
    requestSort,
    totalItemsPerPage,
    totalItems,
    handleClickPage,
    handlePerPage,
  } = useSortableData(results);

  // const [ loader, showLoader, hideLoader ]

  const handleEditMode = (value, index) => {
    setIsEdit(value);
    setCurrentIdx(index);
    console.log("index----", index);
  };

  const handleClickMode = () => {
    setIsEdit(false);
    setCurrentIdx(null);
  };
  // const { fields, append, prepend } = useFieldArray({
  //   name: "test",
  // });
  console.log("---isEdit", isEdit);
  // const currentlyEditing = currentIdx === i;

  useEffect(() => {
    setContent(items);
  }, [items, content]);

  return (
    <>
      <form>
        <Table
          responsive
          striped
          bordered
          size="sm"
          className="table-container"
          style={{ overflowX: "hidden" }}
        >
          <TableHeader
            headers={headersData}
            // onSorting={(field, order) => setSortData({ field, order })}
            onSorting={(field, order) => requestSort(field)}
          />

          <tbody>
            {content.map((data, index) => (
              <tr key={index}>
                {currentIdx != index ? (
                  <>
                    <td
                      className="align-middle"
                      style={{ minWidth: "60px", textAlign: "center" }}
                    >
                      {data.id}
                    </td>
                    <td className="align-middle">{data.name}</td>
                    <td className="align-middle">{data.email}</td>
                    <td className="align-middle">{data.body}</td>
                  </>
                ) : (
                  <>
                    <td
                      className="align-middle"
                      style={{ minWidth: "60px", textAlign: "center" }}
                    >
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.id}
                        onChange={(e) => console.log(e.target.value)}
                        disabled
                      />
                    </td>
                    <td className="align-middle">
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.name}
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </td>
                    <td className="align-middle">
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.email}
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </td>
                    <td className="align-middle">
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.body}
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </td>
                  </>
                )}

                <td
                  className="align-middle "
                  style={{ minWidth: "100px", textAlign: "center" }}
                >
                  {currentIdx != index && (
                    <>
                      <FontAwesomeIcon
                        className="  "
                        icon={faEdit}
                        onClick={() => handleEditMode(true, index)}
                        color="gray"
                      />
                      <FontAwesomeIcon
                        className=" ml-1"
                        icon={faTrash}
                        onClick={() => alert("deleted")}
                        color="red"
                      />
                    </>
                  )}

                  {currentIdx === index && (
                    <>
                      <Button
                        variant="primary"
                        className="ml-1"
                        onClick={() => handleClickMode()}
                        disabled={false}
                        style={{ minWidth: "2rem" }}
                      >
                        Save
                      </Button>
                      <Button
                        variant="primary"
                        className="ml-1"
                        onClick={() => handleClickMode()}
                        disabled={false}
                        style={{ minWidth: "2rem" }}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </form>
      <div className="my-4">
        <TablePagination
          total={totalItems}
          itemsPerPage={totalItemsPerPage}
          currentPage={currentPage}
          pageRows={items}
          onPerPageChange={(el) => {
            handlePerPage(el);
          }}
          onPageChange={(el) => {
            setCurrentPage(el);
            handleClickPage(el);
          }}
        />
      </div>
    </>
  );
};
