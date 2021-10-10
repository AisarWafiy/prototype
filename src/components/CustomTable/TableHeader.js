import React, { useState } from "react";
import arrowExpand from "../../assets/icons/chevron-expand.svg";

export const TableHeader = (props) => {
  const { headers, onSorting } = props;
  //   const [sortingOrder, setSortingOrder] = useState("asc");

  console.log("---headers", headers);

  const onSortingChange = (field) => {
    // const order = sortingOrder === "asc" ? "desc" : "asc";
    // setSortingOrder(order);
    // onSorting(field, order);
    // console.log("---valueee", order);
    // console.log("---field", field);
  };

  return (
    <thead className="table-header">
      <tr>
        {headers.map(({ name, field, sortable }, index) => (
          <th
            key={index}
            onClick={() => (sortable === true ? onSorting(field) : null)}
            className=""
          >
            {name}

            {sortable === true && (
              <img className="ml-1" src={`${arrowExpand}`} />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
