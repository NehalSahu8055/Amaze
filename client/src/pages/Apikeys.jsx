import { Box } from "@mui/material";
import React, { useState } from "react";
import DataTable from "../components/DataTable";
import { getCurrentDate } from "./../utils/getCurrentDate";
import GenerateKey from "./../components/GenerateKey";

function Apikeys() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 50 },
    { field: "key", headerName: "Key", width: 200 },
    { field: "creationDate", headerName: "Creation Date", width: 200 },
    { field: "action", headerName: "Action", width: 100 },
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
      <Box className="flex w-full justify-between gap-6 ">
        <DataTable classes="" rows={apikeysRows} columns={columns} />
        <GenerateKey classes="w-[40%]" setapikeysRows={setapikeysRows} />
      </Box>
    </Box>
  );
}

export default Apikeys;
