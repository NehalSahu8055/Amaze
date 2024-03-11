import React, { useState } from "react";
import DataTable from "../components/DataTable";
import { getCurrentDate } from "./../utils/getCurrentDate";
import { getCurrentTime } from "../utils/getCurrentTime";

function Purchases() {
  const columns = [
    { field: "id", headerName: "Sr.", width: 70 },
    { field: "transactionDate", headerName: "Transaction Date", width: 200 },
    { field: "time", headerName: "Time", width: 200 },
    { field: "credit", headerName: "Credit", width: 150 },
    { field: "remark", headerName: "Remark", width: 200 },
    { field: "action", headerName: "Action", width: 80 },
  ];
  const rows = [
    {
      id: 1,
      transactionDate: getCurrentDate(),
      time: getCurrentTime(),
      credit: 1000000,
      remark: "New Account",
      action: "🗑️",
    },
  ];
  return (
    <>
      <h2 className="pb-5  text-3xl font-semibold tracking-tight  text-slate-950">
        Credit Purchase History
      </h2>
      <DataTable rows={rows} columns={columns} />
    </>
  );
}

export default Purchases;
