import React, { useState } from "react";

import DataTable from "../DataTable";

function BulkReports() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 40 },
    { field: "requestTime", headerName: "Request Time", width: 100 },
    { field: "title", headerName: "Title", width: 80 },
    { field: "sender", headerName: "Sender", width: 80 },
    { field: "source", headerName: "Source", width: 80 },
    { field: "type", headerName: "Type", width: 80 },
    { field: "count", headerName: "Count", width: 80 },
    { field: "credits", headerName: "Credits", width: 80 },
    { field: "length", headerName: "Length", width: 80 },
    {
      field: "ndncInvalidDupBlocked",
      headerName: "Ndnc/Invalid/Dup/Blocked",
      width: 80,
    },
    { field: "message", headerName: "Message", width: 80 },
    { field: "action", headerName: "Action", width: 80 },
  ];
  const rows = [
    {
      id: 1,
      requestTime: "sdf",
      title: "sdf",
      sender: "",
      source: "",
      type: "",
      count: "",
      credits: "",
      length: "",
      ndncInvalidDupBlocked: "",
      message: "",
      action: "🗑️",
    },
  ];
  return (
    <div className="relative">
      <h2 className="pb-2 text-2xl font-semibold tracking-tight  text-slate-950">
        Sent Reports
      </h2>
      <DataTable rows={rows} columns={columns} />
    </div>
  );
}

export default BulkReports;
