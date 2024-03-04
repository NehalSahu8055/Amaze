import { Box } from "@mui/material";
import React from "react";
import AddEntity from "../components/AddEntity";
import DataTable from "../components/DataTable";

function Entities() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 50 },
    { field: "entity", headerName: "Entity", width: 140 },
    { field: "creationDate", headerName: "Creation Date", width: 120 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "remark", headerName: "Remark", width: 140 },
    { field: "action", headerName: "Action", width: 80 },
  ];
  const rows = [
    {
      id: 1,
      entity: "170******714",
      creationDate: "28 Feb 2024",
      status: "ACTIVE",
      remark: "Manage by JP",
      action: "🗑️",
    },
    {
      id: 2,
      entity: "170******714",
      creationDate: "28 Feb 2024",
      status: "ACTIVE",
      remark: "Manage by JP",
      action: "🗑️",
    },
    {
      id: 3,
      entity: "170******714",
      creationDate: "28 Feb 2024",
      status: "ACTIVE",
      remark: "Manage by JP",
      action: "🗑️",
    },
    {
      id: 4,
      entity: "170******714",
      creationDate: "28 Feb 2024",
      status: "ACTIVE",
      remark: "Manage by JP",
      action: "🗑️",
    },
  ];

  return (
    <>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Manage Entities
      </h2>
      <Box className="flex justify-between gap-6">
        <DataTable rows={rows} columns={columns} />
        <AddEntity />
      </Box>
    </>
  );
}

export default Entities;
