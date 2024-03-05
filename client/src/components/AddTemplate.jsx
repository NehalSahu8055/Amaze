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
import React, { useRef } from "react";

function AddTemplate() {
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

  const templateForm = useRef(null);
  const handletemplate = (e) => {
    e.preventDefault();
    const formData = new FormData(templateForm.current);
    const templateId = formData.get("template-id");
    const templateName = formData.get("templateName");

    console.log(templateName);
  };

  return (
    <form
      ref={templateForm}
      onSubmit={handletemplate}
      className="grid h-fit w-full gap-4 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Template</h3>

      <Autocomplete
        className="w-full"
        size="small"
        disablePortal
        id="selectEntity"
        options={entityArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Entity" />
        )}
      />
      <Autocomplete
        className="w-full"
        size="small"
        disablePortal
        id="selectSender"
        options={senderArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Sender" />
        )}
      />
      <Autocomplete
        className="w-full"
        size="small"
        disablePortal
        id="selectTransaction"
        options={transactionArray}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Template Category" />
        )}
      />

      <TextField
        id="dlt-template-ID"
        name="dlt-template-ID"
        label="DLT Template ID"
        size="small"
      />
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        size="small"
      />
      <Button className="mt-2 w-fit  bg-sky-600 px-4 capitalize text-white hover:bg-sky-600/90">
        Add Variable
      </Button>
      <Box className="flex gap-6">
        <Autocomplete
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
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Enable"
        />
      </Box>

      <Box className="space-x-3">
        <Button
          type="submit"
          className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
        >
          Save Template
        </Button>
        <Button
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
