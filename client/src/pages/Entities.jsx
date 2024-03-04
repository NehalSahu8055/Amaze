import { Box, Button } from "@mui/material";
import React, { useRef } from "react";

function Entities() {
  const entitiesForm = useRef(null);
  const handleEntities = (e) => {
    e.preventDefault();
    const formData = new FormData(entitiesForm.current);
    const entityId = formData.get("entity-id");
    const remark = formData.get("remark");

    console.log(remark);
  };
  return (
    <>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Manage Entities
      </h2>
    </>
  );
}

export default Entities;
