import React, { forwardRef } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props, ref) {
  const { columns, data } = props;

  return (
    <table className="table table-bordered table-responsive" ref={ref}>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
}

// eslint-disable-next-line no-func-assign
Table = forwardRef(Table);
export default Table;
