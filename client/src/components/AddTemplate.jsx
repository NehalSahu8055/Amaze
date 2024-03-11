import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import React, { useEffect, useRef, useState } from "react";

function AddTemplate({ settemplateRows }) {
  //hooks
  const [charCount, setcharCount] = useState(0);
  const [smsCount, setsmsCount] = useState(1);

  const templateForm = useRef(null);
  const [category, setcategory] = useState();
  const [title, settitle] = useState();
  const [sender, setsender] = useState();
  const [entity, setentity] = useState();
  const [dltTemplate, setdltTemplate] = useState("");
  const [message, setmessage] = useState("");
  const [lang, setlang] = useState("HINDI");
  const [currentID, setcurrentID] = useState(1);

  const newTemplate = {
    id: currentID,
    template: message,
    categorySender: category,
    titleDLTIDEntityID: entity,
    status: "APPROVED",
    action: "🗑️",
  };

  //handlers
  const handletemplate = (e) => {
    e.preventDefault();

    settemplateRows((prev) => {
      return [...prev, newTemplate];
    });
    setcurrentID((prev) => ++prev);
  };
  const handleMessage = (e) => {
    const value = e.currentTarget.value;
    const smsLengthLimit = lang === "HINDI" ? 160 : 70;
    setmessage(value);

    if (message.length % smsLengthLimit === 0 && message.length !== 0) {
      setsmsCount((prev) => ++prev);
    } else if (message.length == 0) setsmsCount(1);
  };
  const handleAddVariable = () => {
    setmessage((prev) => prev + "{#var#}");
  };
  const handleEntity = (e, newValue) => {
    setentity(newValue);
  };
  const handleSender = (e, newValue) => {
    setsender(newValue);
  };
  const handleDLTTemplate = (e, newValue) => {
    setdltTemplate(newValue);
  };
  useEffect(() => {
    console.log(dltTemplate);
  }, []);

  const handleTitle = (e, newValue) => {
    settitle(newValue);
  };
  const handleLanguage = (e, newValue) => {
    setlang(newValue);
  };
  const handleCategory = (e, newValue) => {
    setcategory(newValue);
  };

  const handleReset = () => {
    setcharCount(0);
    setsmsCount(1);
    setcategory("");
    settitle("");
    setsender("");
    setentity("");
    setdltTemplate("");
    setmessage("");
    setlang("HINDI");
    setcurrentID(1);
  };

  //arrays
  const entityArray = ["1780s890384093", "e128937197491824n"];
  const senderArray = ["1780s890384093", "e128937197491824n"];
  const transactionArray = ["Transaction", "Service", "Promotion"];
  const languageArray = [
    "AMHARIC",
    "ARABIC",
    "BENGALI",
    "CHINESE",
    "GREEK",
    "GUJARATI",
    "HINDI",
    "KANNADA",
    "MALAYALAM",
    "MARATHI",
    "NEPALI",
    "ORIYA",
    "PERSIAN",
    "PUNJABI",
    "RUSSIAN",
    "SANSKRIT",
    "SERBIAN",
    "SINHALESE",
    "TAMIL",
    "TELUGU",
    "TIGRINYA",
    "URDU",
  ];

  return (
    <form
      ref={templateForm}
      onSubmit={handletemplate}
      className="grid h-fit w-full gap-2 rounded-md border border-slate-200 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Template</h3>

      <Autocomplete
        className="w-full"
        onChange={handleEntity}
        value={entity}
        size="small"
        disablePortal
        id="selectEntity"
        options={entityArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Entity" />
        )}
        required
      />
      <Autocomplete
        className="w-full"
        onChange={handleSender}
        value={sender}
        size="small"
        disablePortal
        id="selectSender"
        options={senderArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Sender" />
        )}
        required
      />
      <Autocomplete
        className="w-full"
        onChange={handleCategory}
        value={category}
        size="small"
        disablePortal
        id="selectTransaction"
        options={transactionArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Template Category" />
        )}
        required
      />

      <TextField
        id="dlt-template-ID"
        onChange={handleDLTTemplate}
        value={dltTemplate}
        name="dlt-template-ID"
        label="DLT Template ID (Max 14 chars)"
        size="small"
        inputProps={{ maxLength: 14 }}
        required
      />

      <TextField
        id="title"
        onChange={handleTitle}
        value={title}
        name="title"
        label="Title"
        variant="outlined"
        size="small"
        required
      />
      <Button
        onClick={handleAddVariable}
        className="my-2 w-fit  bg-sky-600 px-4 capitalize text-white hover:bg-sky-600/90"
      >
        Add Variable
      </Button>
      <Box className="flex gap-6">
        <Autocomplete
          onChange={handleLanguage}
          value={lang}
          className="w-full"
          size="small"
          disablePortal
          id="selectLanguage"
          options={languageArray}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Language" />
          )}
        />
        <FormControlLabel control={<Checkbox />} label="Enable" />
      </Box>
      <TextareaAutosize
        onChange={handleMessage}
        value={message}
        className="rounded-md border border-gray-300 p-2.5 outline-none focus:border-2 focus:border-sky-600"
        placeholder=""
        minRows="6"
        required
      />
      <div className="-mt-2 ml-auto space-x-2 font-semibold">
        <span className=" text-green-700">{message.length} Characters</span>
        <span className="text-red-600">{smsCount} SMS</span>
      </div>

      <Box className="space-x-3">
        <Button
          type="submit"
          className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
        >
          Save Template
        </Button>
        <Button
          onClick={handleReset}
          type="reset"
          variant="outlined"
          className="mt-2 w-fit  border-slate-800  px-4 capitalize text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white"
        >
          Reset
        </Button>
      </Box>
    </form>
  );
}

export default AddTemplate;
