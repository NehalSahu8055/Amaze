import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { getCurrentDate } from "../utils/getCurrentDate";
function AddEntity({ setnewEntityData }) {
  const entitiesForm = useRef(null);
  const [currentID, setcurrentID] = useState(1);
  const entityArray = ["1780s890384093", "e128937197491824n"];
  const [entity, setentity] = useState();

  const handleEntities = (e) => {
    e.preventDefault();
    const formData = new FormData(entitiesForm.current);
    const entityId = formData.get("entityId");
    const remark = formData.get("remark");

    const newEntityData = {
      id: currentID,
      entity: entity,
      creationDate: getCurrentDate(),
      status: "ACTIVE",
      remark: remark,
      action: "🗑️",
    };
    setnewEntityData((prev) => {
      return [...prev, newEntityData];
    });

    setcurrentID((prev) => ++prev);
  };
  const handleEntity = (e, newValue) => {
    setentity(newValue);
  };

  return (
    <form
      ref={entitiesForm}
      onSubmit={handleEntities}
      className="grid h-fit w-full gap-4 rounded-md border border-slate-200 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Entity</h3>
      <div className="grid gap-2">
        <Autocomplete
          className="w-full"
          onChange={handleEntity}
          value={entity}
          size="small"
          disablePortal
          id="entityID"
          options={entityArray}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Entity Id" />}
          required
        />
        <TextField
          size="small"
          type="text"
          name="remark"
          id="remark"
          placeholder="Remark"
          autoComplete="remark"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
      >
        Save Now
      </Button>
    </form>
  );
}

export default AddEntity;
