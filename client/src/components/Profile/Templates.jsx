import React from "react";
import AddTemplate from "../AddTemplate";

function Templates() {
  { field: "id", headerName: "Sr.", width: 50 },
  { field: "sender", headerName: "Sender", width: 140 },
  { field: "entity", headerName: "Entity", width: 140 },
  { field: "approvedOn", headerName: "Approved On", width: 120 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "action", headerName: "Action", width: 80 },
];
const rows = [
  {
    id: 1,
    sender: "MTCOM",
    entity: "170******714",
    approvedOn: "28 Feb 2024",
    status: "APPROVED",
    action: "🗑️",
  },
  {
    id: 2,
    sender: "MTCOM",
    entity: "170******714",
    approvedOn: "28 Feb 2024",
    status: "APPROVED",
    action: "🗑️",
  },
  {
    id: 3,
    sender: "MTCOM",
    entity: "170******714",
    approvedOn: "28 Feb 2024",
    status: "APPROVED",
    action: "🗑️",
  },
  {
    id: 4,
    sender: "MTCOM",
    entity: "170******714",
    approvedOn: "28 Feb 2024",
    status: "APPROVED",
    action: "🗑️",
  },
];
  return (
    <div>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Manage Template
      </h2>
      
      <AddTemplate />
    </div>
  );
}

export default Templates;
