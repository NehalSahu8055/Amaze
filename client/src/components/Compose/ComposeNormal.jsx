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
import DateAndTimePicker from "../Auxiliary/DateAndTimePicker";
import getScheduleBaseTimeDate from "../../utils/getScheduleBaseTimeDate";

function ComposeNormal({
  isAdvanceOrLargeCustom,
  setnewSenderData,
  setFormData,
}) {
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
  const [isScheduled, setisScheduled] = useState(false);
  const [scheduledDateTime, setscheduledDateTime] = useState();
  const [isExactMsgTemplate, setisExactMsgTemplate] = useState(true);
  const [lang, setlang] = useState("HINDI");
  const [campaignTitle, setcampaignTitle] = useState();
  const [entityID, setentityID] = useState();
  const [phonebook, setphonebook] = useState();

  const editTemplate = useRef(null);

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
  let inputTemp = "";
  let s = templateCellData;
  let ft = "";
  let finalText = "";

  const formattedTime = getScheduleBaseTimeDate();
  const senderArray = ["1780s890384093", "e128937197491824n"];
  const categoryArray = ["Transaction", "Service", "Promotion"];

  const handleCustomNormal = (e) => {
    e.preventDefault();

    const data = {
      campaignTitle: campaignTitle,
      sender: sender,
      category: category,
      entityID: entityID,
      isScheduled: isScheduled,
      scheduledDateTime: scheduledDateTime,
      phonebook: phonebook,
      dataFromTemplate: dataFromTemplate.startsWith("~")
        ? ""
        : dataFromTemplate,
    };
    setFormData(data);
    console.log(data);
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
  const handleentityID = (e, newValue) => {
    setentityID(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  const handleIsScheduled = (e, newValue) => {
    setisScheduled((prev) => !prev);
    setscheduledDateTime(getCurrentDateTime);
  };
  const handleDateTimeChange = (newDateTime) => {
    const scheduledDateTime = newDateTime.format("YYYY-MM-DD HH:mm");
    setscheduledDateTime(scheduledDateTime);
    console.log(scheduledDateTime);
  };
  const handleLanguage = (e, newValue) => {
    setlang(newValue);
  };
  const handlephonebook = (e) => {
    setphonebook(e.currentTarget.value);
  };
  const handleCampaignTitle = (e) => {
    setcampaignTitle(e.currentTarget.value);
  };
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
      // inputTemp += `<input placeholder="Empty"  class="px-2 outline-none bg-yellow-100 border-red-300 border"  type="text" id="templateInput${count++}">`;
      finalText += "~ti_" + count + "~";
    }

    outputt.innerHTML = inputTemp;

    var id = 1;
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("blur", function (e) {
        var inputValue = e.target.value;
        ft = finalText;
        document.getElementsByName("ti").forEach((input) => {
          ft = ft.replace("~" + input.id + "~", input.value);
        });
        console.log(ft);
        setdataFromTemplate(ft);
      });
    });
  }, [s, finalText]);

  return (
    <form
      ref={customNormalForm}
      onSubmit={handleCustomNormal}
      className="flex h-fit w-full gap-6 rounded-md  border border-slate-200 bg-white p-6 py-4"
      action=""
    >
      {open && (
        <TemplateModal
          open={open}
          handleClose={handleClose}
          handleCellDoubleClick={handleCellDoubleClick}
        />
      )}
      <Box className="flex w-full flex-col gap-4">
        <Box className="flex justify-between gap-4">
          <Box className="mb-1 flex flex-col gap-2">
            <TextField
              size="small"
              type="text"
              onChange={handleCampaignTitle}
              className="child2:child:py-0"
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
              onChange={handleentityID}
              className="w-full"
              name="entityID"
              id="entityID"
              placeholder="Entity ID ( 10********053 )"
              autoComplete="entityID"
              required
              InputProps={{
                readOnly: true,
              }}
              disabled
            />
            <Box className="flex items-center gap-2">
              <FormControl>
                <RadioGroup
                  onChange={handleIsScheduled}
                  defaultValue="now"
                  name="radio-buttons-group"
                >
                  <Box>
                    <FormControlLabel
                      value="now"
                      control={<Radio />}
                      label="Now"
                    />
                    <FormControlLabel
                      value="scheduled"
                      control={<Radio />}
                      label="Scheduled"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
              <TextField
                // size="small"
                className=" w-fit child:child:py-1"
                value={scheduledDateTime}
                readOnly
                disabled
              />
            </Box>
          </Box>
          <Box className="flex-[0.7]">
            <Box className="mb-1 child:w-full">
              <div className="flex  justify-between font-semibold text-slate-800">
                <span>Phonebook</span>
                <Button className="uppercase text-sky-500">
                  Select from Phonebook
                </Button>
              </div>
              <TextareaAutosize
                onChange={handlephonebook}
                placeholder="Type or paste numbers here, one per line e.g  &#10;98XXXXXXXX  &#10;94XXXXXXXX"
                className="mt-1 rounded-md border border-gray-300 p-2.5 outline-none focus:border focus:border-sky-600"
                minRows="4"
                required
              />
              <Box className=" flex justify-between">
                <Box>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remove Duplicate"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remove Invalid"
                  />
                </Box>
                <InputFileUpload />
              </Box>
            </Box>
            <Box>
              <TextareaAutosize
                ref={exactMsgTemplate}
                value={dataFromTemplate.startsWith("~") ? "" : dataFromTemplate}
                placeholder="Exact Message from Template"
                className=" w-full rounded-md rounded-b-none border border-gray-300 p-2.5 text-gray-500 outline-none focus:border-2 focus:border-sky-600"
                minRows="5"
                disabled={isExactMsgTemplate}
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
                      <span className="ml-2 rounded-full bg-white  px-2">
                        1
                      </span>
                    </Button>
                  </Box>

                  <Box className="flex">
                    <Box className="grid place-content-center border-x border-slate-300 px-2.5">
                      1 msg
                    </Box>
                    <Box className="flex items-center border-r px-2 ">
                      <span>Aa</span>
                      <span className="pl-2 text-sky-600">
                        {dataFromTemplate.length}&nbsp;
                      </span>
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
            </Box>
          </Box>

          <Box ref={editTemplate} className="flex-[0.3]">
            <span className="font-semibold">
              Template <br /> ( Edit your message here. )
            </span>
            {isScheduled && (
              <DateAndTimePicker
                currentTime={formattedTime}
                handleDateTimeChange={handleDateTimeChange}
              />
            )}

            <div
              id="output"
              ref={templateBox}
              className="mt-2.5 h-[46vh] w-full rounded-md  border border-gray-300 p-2 outline-none focus:border focus:border-sky-600"
              required
              contentEditable
            >
              Empty
            </div>
            <Button
              type="submit"
              className="mt-2 w-fit  bg-sky-700 px-4 capitalize text-white hover:bg-sky-700/90"
            >
              Send Now
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default ComposeNormal;
