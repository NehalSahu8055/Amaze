import { Button } from "@mui/material";
import React, { useRef } from "react";
function AddSender() {
  const senderForm = useRef(null);
  const handleSender = (e) => {
    e.preventDefault();
    const formData = new FormData(senderForm.current);
    const senderId = formData.get("sender-id");
    const senderName = formData.get("senderName");

    console.log(senderName);
  };

  return (
    <form
      ref={senderForm}
      onSubmit={handleSender}
      className="grid h-fit w-full gap-4 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Sender</h3>
      <div className="grid gap-2">
        <input
          type="text"
          name="sender-id"
          id="sender-id"
          placeholder="Sender ID"
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="sender-id"
          required
        />
        <input
          type="text"
          name="senderName"
          id="senderName"
          placeholder="Sender Name"
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="senderName"
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

export default AddSender;
