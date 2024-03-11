import React, { useState } from "react";

import DataTable from "../DataTable";

function APIReports() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 40 },
    { field: "sender", headerName: "Sender", width: 80 },
    { field: "mobile", headerName: "Mobile", width: 80 },
    { field: "receivedTime", headerName: "Received Time", width: 120 },
    { field: "submitTime", headerName: "Submit Time", width: 100 },
    { field: "message", headerName: "Message", width: 120 },
    { field: "messageLength", headerName: "Message Length", width: 130 },
    { field: "status", headerName: "Status", width: 80 },
    { field: "deliveryTime", headerName: "Delivery Time", width: 100 },
  ];
  const rows = [
    {
      id: 1,
      sender: "nehal",
      mobile: "234123412",
      receivedTime: "safsd",
      submitTime: "sfdasdf",
      message: "Fsadfsadf",
      messageLength: 123,
      status: "fsdfs",
      deliveryTime: "fsadfsadf",
    },
  ];
  return (
    <div className="relative">
      <h2 className="pb-2 text-2xl font-semibold tracking-tight  text-slate-950">
        API SMS Details
      </h2>
      <DataTable rows={rows} columns={columns} />
    </div>
  );
}

export default APIReports;
