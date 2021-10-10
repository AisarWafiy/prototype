import React, { useEffect } from "react";

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const [page, setPage] = React.useState(1);

  const [totalItems, setTotalItems] = React.useState(0);
  const [totalPerPage, setTotalPerPage] = React.useState(40);

  const totalperpages = 100;

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    setTotalItems(sortableItems.length);

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems.slice(
      (page - 1) * totalPerPage,
      (page - 1) * totalPerPage + totalPerPage
    );
  }, [items, sortConfig, page, totalPerPage]);

  const requestSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleClickPage = (page) => {
    setPage(parseInt(page));
  };

  const handlePerPage = (total) => {
    setTotalPerPage(parseInt(total));
    // setPage(parseInt(1));
  };

  return {
    items: sortedItems,
    requestSort,
    sortConfig,
    totalItems,
    handleClickPage,
    handlePerPage,
  };
};
