import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
