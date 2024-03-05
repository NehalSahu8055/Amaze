import { Box } from "@mui/material";
import React, { useState } from "react";
import DataTable from "../components/DataTable";
import { getCurrentDate } from "./../utils/getCurrentDate";

function Apikeys() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 50 },
    { field: "key", headerName: "Key", width: 150 },
    { field: "creationDate", headerName: "Creation Date", width: 120 },
    { field: "action", headerName: "Action", width: 80 },
  ];
  const rows = [
    {
      id: 1,
      key: "123456",
      creationDate: getCurrentDate(),
      action: "🗑️",
    },
  ];
  const [apikeysRows, setapikeysRows] = useState(rows);
  return (
    <Box>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Manage API Keys
      </h2>
      <Box className="flex justify-between gap-6">
        <DataTable rows={apikeysRows} columns={columns} />
      </Box>
    </Box>
  );
}

export default Apikeys;
