import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function DataTable({ rows, columns, classes }) {
  return (
    <div>
      <DataGrid
        className={`bg-white ${classes}`}
        rows={rows}
        columns={columns}
        components={{
          Toolbar: () => <GridToolbar />,
        }}
        pageSize={5}
        rowHeight={100}
        checkboxSelection
      />
    </div>
  );
}
