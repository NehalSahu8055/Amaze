import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function DataTable({
  rows,
  columns,
  classes,
  handleCellDoubleClick,
}) {
  return (
    <Box>
      <DataGrid
        density="compact"
        onCellDoubleClick={handleCellDoubleClick}
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
    </Box>
  );
}
