import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { getCurrentDate } from "../utils/getCurrentDate";

function GenerateKey({ setapikeysRows, classes }) {
  const genKeyForm = useRef(null);
  const [currentID, setcurrentID] = useState(1);
  const [entity, setgenKey] = useState();
  const entityArray = ["1780s890384093", "e128937197491824n"];

  const handleSender = (e) => {
    e.preventDefault();
    const formData = new FormData(genKeyForm.current);
    const entityId = formData.get("entityId");

    const newKey = {
      id: currentID,
      key: "123456",
      creationDate: getCurrentDate(),
      action: "🗑️",
    };
    setapikeysRows((prev) => {
      return [...prev, newKey];
    });
  };

  return (
    <form
      ref={genKeyForm}
      onSubmit={handleSender}
      className={`grid h-fit gap-4 rounded-md  border border-slate-200 bg-white px-5 py-4 pt-4 ${classes}`}
      action=""
    >
      <h3 className="text-xl font-semibold">Generate New Key</h3>

      <Button
        type="submit"
        className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
      >
        Generate new API authentication key
      </Button>
    </form>
  );
}

export default GenerateKey;
