import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  TextField,
  TextareaAutosize,
  IconButton,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useEffect, useRef, useState } from "react";
import InputFileUpload from "../Auxiliary/InputFileUpload";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import TemplateModal from "./../Modal/TemplateModal";
import TextWithInputs from "../TextWithInputs";

function ComposeNormal({ setnewSenderData }) {
  const customNormalForm = useRef(null);
  const exactMsgTemplate = useRef(null);
  const templateBox = useRef(null);
  const placeholdersInput = useRef(null);
  const [currentID, setcurrentID] = useState(1);
  const [sender, setsender] = useState();
  const [category, setcategory] = useState();
  const [open, setOpen] = useState(false);

  const [templateCellData, settemplateCellData] = useState("");
  const [dataFromTemplate, setdataFromTemplate] = useState("");
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
  const handleCellDoubleClick = (params, event) => {
    console.log("Double clicked cell info:", params);
    params.field == "template" && settemplateCellData(params.value);
    handleClose();
  };
  const handleSender = (e, newValue) => {
    setsender(newValue);
  };
  const handleCategory = (e, newValue) => {
    setcategory(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  let inputTemp = "";

  // const handleDataFromTemplate = () => {
  //   console.log("LOL");
  //   // setdataFromTemplate(ft);
  // };

  let s = templateCellData,
    ft = "";
  let finalText = "";

  useEffect(() => {
    const outputt = document.querySelector("#output");
    var count = 1;
    let arr1 = s.split("{#var#}");

    for (let i = 0; i < arr1.length - 1; i++) {
      inputTemp +=
        arr1[i] +
        `<input 
        class="bg-yellow-100 px-2 outline-none mb-2 border-red-200 border" type="text" id="ti_${count}" name="ti">`;
      finalText += arr1[i] + "~ti_" + count + "~";
      count++;
    }
    inputTemp += arr1[arr1.length - 1];
    finalText += arr1[arr1.length - 1];
    if (arr1[arr1.length - 1] == "") {
      inputTemp += `<input placeholder="Empty"  class="px-2 outline-none bg-yellow-100 border-red-300 border"  type="text" id="templateInput${count++}">`;
      finalText += "~ti_" + count + "~";
    }

    outputt.innerHTML = inputTemp;

    var id = 1;
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("blur", function (e) {
        e.stopPropagation();
        var inputValue = e.target.value;
        ft = finalText;
        document.getElementsByName("ti").forEach((input) => {
          ft = ft.replace("~" + input.id + "~", input.value);
        });
        console.log(ft);
        setdataFromTemplate(ft);
      });
    });
    console.log(s);

    return () => {};
  }, [s, finalText]);

  return (
    <form
      ref={customNormalForm}
      onSubmit={handleCustomNormal}
      className="flex h-fit w-full gap-6 rounded-md  border border-slate-200 bg-white px-3  py-3"
      action=""
    >
      {open && (
        <TemplateModal
          open={open}
          handleClose={handleClose}
          handleCellDoubleClick={handleCellDoubleClick}
        />
      )}

      <Box className="flex flex-col gap-4">
        <TextField
          size="small"
          type="text"
          name="campaignTitle"
          id="campaignTitle"
          label="Campaign Title"
          placeholder="Campaign Title"
          autoComplete="campaignTitle"
          required
          inputProps={{ maxLength: 6 }}
        />
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
          name="entityID"
          id="entityID"
          placeholder="Entity ID ( 10********053 )"
          autoComplete="entityID"
          required
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Box>
        <Box className="mb-10 child:w-full">
          <div className="flex justify-between font-semibold text-slate-800">
            <span>Phonebook</span>
            <Button className="uppercase text-sky-500">
              Select from Phonebook
            </Button>
          </div>
          <TextareaAutosize
            // onChange={handleMessage}
            // value={message}
            placeholder="Type or paste numbers here, one per line e.g  &#10;98XXXXXXXX  &#10;94XXXXXXXX"
            className="mt-1 rounded-md border border-gray-300 p-2.5 outline-none focus:border-2 focus:border-sky-600"
            minRows="4"
            required
          />
          <Box className=" flex justify-between">
            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="Remove Duplicate"
              />
              <FormControlLabel control={<Checkbox />} label="Remove Invalid" />
            </Box>
            <InputFileUpload />
          </Box>
        </Box>
        <Box>
          <TextareaAutosize
            // onChange={handleMessage}
            ref={exactMsgTemplate}
            value={dataFromTemplate}
            placeholder="Exact Message from Template"
            className=" w-full rounded-md rounded-b-none border border-gray-300 p-2.5 outline-none focus:border-2 focus:border-sky-600"
            minRows="5"
            disabled
            required
          />
          <Box>
            <Box className="flex justify-between gap-2 border pl-1">
              <Box className="flex gap-2">
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  endIcon={<LinkIcon />}
                  className="my-1 bg-slate-300 text-slate-900 hover:bg-slate-300/80"
                >
                  URL
                </Button>
                <Button
                  onClick={handleClickOpen}
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  endIcon={<DescriptionOutlinedIcon />}
                  className="my-1 bg-slate-300 text-slate-900 hover:bg-slate-300/80"
                >
                  Template
                  <span className="ml-2 rounded-full bg-white  px-2">1</span>
                </Button>
              </Box>

              <Box className="flex">
                <Box className="grid place-content-center border-x border-slate-300 px-2.5">
                  1 msg
                </Box>
                <Box className="flex items-center border-r px-2 ">
                  <span>Aa</span>{" "}
                  <span className="pl-2 text-sky-600">0&nbsp;</span>
                  /1000
                </Box>
                <Button
                  className="mx-1 my-1"
                  size="small"
                  aria-label="Click me to expand"
                >
                  <ExpandMoreOutlinedIcon />
                </Button>
              </Box>
            </Box>
          </Box>

          <FormControl>
            <RadioGroup defaultValue="now" name="radio-buttons-group">
              <Box className="pt-2">
                <FormControlLabel value="now" control={<Radio />} label="Now" />
                <FormControlLabel
                  value="scheduled"
                  control={<Radio />}
                  label="Scheduled"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          type="submit"
          className="mt-2 w-fit  bg-sky-700 px-4 capitalize text-white hover:bg-sky-700/90"
        >
          Send Now
        </Button>
      </Box>
      <Box>
        <span className=" font-semibold">
          Template( Edit your message here. )
        </span>
        <Box
          id="output"
          ref={templateBox}
          // onClick={(e) => {
          //   // settemplateCellData(e.currentTarget.value);
          //   handleDynamicTemplateData();
          // }}
          // value={templateCellData}
          // onBlur={handleDataFromTemplate}
          className="mt-4 h-[65vh] w-full rounded-md  border border-gray-300 p-2 outline-none focus:border-2 focus:border-sky-600"
          required
        >
          Empty
        </Box>
      </Box>
    </form>
  );
}

export default ComposeNormal;
