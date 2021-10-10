import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

export const TablePagination = (props) => {
  const {
    total = 0,
    // perPage = { perPage },
    currentPage = 1,
    onPageChange,
    onPerPageChange,
  } = props;

  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(40);
  const [countDisplay, setCountDisplay] = useState({
    countFrom: 1,
    countTo: 40,
  });

  const pageOptions = [10, 20, 30, 40, 50];
  let recordsDiplayed = "";

  useEffect(() => {
    if (total > 0 && perPage > 0) {
      setTotalPages(Math.ceil(total / perPage));

      let recordsCountFrom =
        (parseInt(currentPage) - 1) * parseInt(perPage) + 1;
      let recordsCountTo = recordsCountFrom + parseInt(perPage) - 1;

      if (recordsCountTo > total) {
        recordsCountTo = total;
      }

      setCountDisplay({ countFrom: recordsCountFrom, countTo: recordsCountTo });
    }
  }, [total, perPage, currentPage]);

  // console.log("pagerows", pageRows.length);
  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  }, [totalPages, currentPage]);

  if (totalPages === 0) return 0;

  return (
    <>
      <div className="d-flex justify-content-between">
        <Pagination size="sm" className="flex-wrap mx-5">
          <Pagination.Prev
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {paginationItems}
          <Pagination.Next
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />

          {/* <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        // <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
          <Pagination.Last onClick={() => onPageChange(totalPages)} />
        </Pagination>

        <div>
          {currentPage === 1 ? null : (
            <FontAwesomeIcon
              size="lg"
              icon={faChevronLeft}
              // className="disabled"
              color="blue"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1 || 0}
            />
          )}

          <span>
            {total > 1 ? (
              <>
                <span className="font-weight-bold">
                  &nbsp;{countDisplay?.countFrom}
                </span>
                -
                <span className="font-weight-bold">
                  &nbsp;
                  {countDisplay.countTo}
                </span>
                &nbsp;of &nbsp;<span className="font-weight-bold">{total}</span>
                &nbsp; Bids &nbsp;
              </>
            ) : (
              ` ${total} Bids`
            )}
          </span>
          {currentPage === totalPages ? null : (
            <FontAwesomeIcon
              size="lg"
              icon={faChevronRight}
              // className="disabled"
              color="blue"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          )}
        </div>

        <div className="floating-label">
          <select
            className="floating-select"
            id="floatingSelect"
            onChange={(e) => {
              console.log("here");
              onPerPageChange(e.target.value);
              setPerPage(e.target.value);
              onPageChange(1);
            }}
            defaultValue={40}
            style={{ width: "100px" }}
          >
            {pageOptions?.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
          <span className="highlight"></span>
          <label value="">Bids per page</label>
        </div>
      </div>
    </>
  );
};
