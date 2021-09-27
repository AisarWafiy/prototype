import React, { useEffect, useMemo, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export const TablePagination = (props) => {
  const { total = 0, itemsPerPage = 10, currentPage = 1, onPageChange } = props;

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
  }, [total, itemsPerPage]);
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
      <Pagination size="sm">
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

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
        <Pagination.Last />
      </Pagination>
    </>
  );
};
