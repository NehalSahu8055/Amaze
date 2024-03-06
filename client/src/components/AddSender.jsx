import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { getCurrentDate } from "../utils/getCurrentDate";
function AddSender({ setnewSenderData }) {
  const senderForm = useRef(null);
  const [currentID, setcurrentID] = useState(1);
  const [entity, setentity] = useState();

  const entityArray = ["1780s890384093", "e128937197491824n"];

  const handleSender = (e) => {
    e.preventDefault();
    const formData = new FormData(senderForm.current);
    const entityId = formData.get("entityId");
    const senderName = formData.get("senderName");
    // setnewSenderData({ id: currentID,entityId:entityId, approved });
    const newSenderData = {
      id: currentID,
      sender: senderName,
      entity: entity,
      approvedOn: getCurrentDate(),
      status: "APPROVED",
      action: "🗑️",
    };
    setnewSenderData((prev) => {
      return [...prev, newSenderData];
    });

    setcurrentID((prev) => ++prev);
  };
  const handleEntity = (e, newValue) => {
    setentity(newValue);
  };

  return (
    <form
      ref={senderForm}
      onSubmit={handleSender}
      className="grid h-fit w-full gap-4 rounded-md  border border-slate-200 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Sender</h3>
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
          name="senderName"
          id="senderName"
          placeholder="Sender Name"
          autoComplete="senderName"
          required
          inputProps={{ maxLength: 6 }}
        />
      </div>
      <Button
        type="submit"
        className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
      >
        Save Now€
      </Button>
    </form>
  );
}

export default AddSender;
