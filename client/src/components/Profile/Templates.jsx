import React, { useState } from "react";
import AddTemplate from "../AddTemplate";
import DataTable from "../DataTable";
import { Box } from "@mui/material";

function Templates() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 50 },
    { field: "template", headerName: "Template", width: 140 },
    { field: "categorySender", headerName: "Category/Sender", width: 140 },
    {
      field: "titleDLTIDEntityID",
      headerName: "Title/DLT ID/Entity ID",
      width: 120,
    },
    { field: "status", headerName: "Status/Type", width: 100 },
    { field: "action", headerName: "Action", width: 80 },
  ];
  const rows = [
    {
      id: 1,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },
    {
      id: 2,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },
    {
      id: 3,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },
    {
      id: 4,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },
    {
      id: 5,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },

    {
      id: 6,
      template:
        "1234 is your OTP to log into Amaze App. Do not share this with anyone. Enjoy Investing!!  ",
      categorySender: "170******714",
      titleDLTIDEntityID: "28 Feb 2024",
      status: "APPROVED",
      action: "🗑️",
    },
  ];
  const [lang, setlang] = useState("HINDI");
  const [templateRows, settemplateRows] = useState(rows);
  return (
    <div>
      <h2 className="pb-6 text-3xl font-semibold tracking-tight  text-slate-950">
        Manage Template
      </h2>
      <Box className="flex justify-between gap-6">
        <DataTable rows={templateRows} columns={columns} />
        <AddTemplate settemplateRows={settemplateRows} />
      </Box>
    </div>
  );
}

export default Templates;
