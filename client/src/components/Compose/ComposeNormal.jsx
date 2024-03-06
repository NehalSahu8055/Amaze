import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
// import { getCurrentDate } from "../utils/getCurrentDate";
function ComposeNormal({ setnewSenderData }) {
  const customNormalForm = useRef(null);
  const [currentID, setcurrentID] = useState(1);
  const [sender, setsender] = useState();
  const [category, setcategory] = useState();

  const senderArray = ["1780s890384093", "e128937197491824n"];
  const categoryArray = ["Transaction", "Service", "Promotion"];

  const handleCustomNormal = (e) => {
    e.preventDefault();
    const formData = new FormData(customNormalForm.current);
    const entityId = formData.get("entityId");
    const senderName = formData.get("senderName");
    // setnewSenderData({ id: currentID,entityId:entityId, approved });
    // const newSenderData = {
    //   id: currentID,
    //   sender: senderName,
    //   sender: sender,
    //   approvedOn: getCurrentDate(),
    //   status: "APPROVED",
    //   action: "🗑️",
    // };
    // setnewSenderData((prev) => {
    //   return [...prev, newSenderData];
    // });

    setcurrentID((prev) => ++prev);
  };
  const handleSender = (e, newValue) => {
    setsender(newValue);
  };
  const handleCategory = (e, newValue) => {
    setcategory(newValue);
  };

  return (
    <form
      ref={customNormalForm}
      onSubmit={handleCustomNormal}
      className="grid h-fit w-full gap-4 rounded-md  border border-slate-200 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Sender</h3>
      <div className="grid gap-2">
        <Autocomplete
          className="w-full"
          label="Select Sender"
          onChange={handleSender}
          value={sender}
          size="small"
          disablePortal
          id="senderID"
          options={senderArray}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Sender" />
          )}
          required
        />
        <Autocomplete
          className="w-full"
          label="Select Category"
          onChange={handleCategory}
          value={category}
          size="small"
          disablePortal
          id="senderID"
          options={categoryArray}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Category" />
          )}
          required
        />

        <TextField
          size="small"
          type="text"
          name="senderName"
          id="senderName"
          label="Sender Name"
          placeholder="Sender Name"
          autoComplete="senderName"
          required
          inputProps={{ maxLength: 6 }}
        />

        <TextField
          size="small"
          type="text"
          name="entityID"
          id="entityID"
          placeholder="Entity ID ( 10********053 )"
          autoComplete="entityID"
          required
          InputProps={{
            readOnly: true,
          }}
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

export default ComposeNormal;
