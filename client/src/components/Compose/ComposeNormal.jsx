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
  const [sender, setsender] = useState();
  const [category, setcategory] = useState();
  const [open, setOpen] = useState(false);
  const [templateCellData, settemplateCellData] = useState("");
  const [dataFromTemplate, setdataFromTemplate] = useState("");
  const [isScheduled, setisScheduled] = useState(false);
  const [scheduledDateTime, setscheduledDateTime] = useState();
  const [isExactMsgTemplate, setisExactMsgTemplate] = useState(true);
  const [campaignTitle, setcampaignTitle] = useState();
  const [entityID, setentityID] = useState();
  let [phonebook, setphonebook] = useState();
  const [isInvalidChecked, setisInvalidChecked] = useState(false);
  const [isDuplicateChecked, setisDuplicateChecked] = useState(false);

  const editTemplate = useRef(null);

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

  const handlephonebook = (e) => {
    let input = e.target.value;

    // note: 1 lakh max entry in phonebook
    if (input.length > 100000) {
      input = input.slice(0, 100000);
    }
    setphonebook(input);
  };
  const handleRefinePhonebook = () => {
    handleRemoveDuplicate();
    handleInvalidMobNo();
  };
  const handleCampaignTitle = (e) => {
    setcampaignTitle(e.currentTarget.value);
  };
  const handleRemoveDuplicate = () => {
    console.log(phonebook);
    let extractMobNo = phonebook.split("\n");
    let phonebookArr = extractMobNo.map((item) => item.trim());
    let uniqueMobNo = new Set(phonebookArr);
    console.log("uniqueMobNo", uniqueMobNo);
    phonebook = [...uniqueMobNo].join("\n");
    setphonebook(phonebook);
  };
  const handleInvalidMobNo = () => {
    let validPhonebook = phonebook
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length === 10);
    console.log("handleInvalidMobNo", validPhonebook);
    phonebook = [...validPhonebook].join("\n");

    setphonebook(phonebook);

    return validPhonebook;
  };

  const handleDuplicateChecked = () => {
    setisDuplicateChecked((prev) => !prev);
    handleRemoveDuplicate();
  };
  const handleInvalidChecked = () => {
    setisInvalidChecked((prev) => !prev);
    handleInvalidMobNo();
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
              <FormControl required>
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
                value={phonebook}
                onChange={handlephonebook}
                onBlur={() => {
                  isInvalidChecked && handleInvalidMobNo();
                  isDuplicateChecked && handleRemoveDuplicate();
                }}
                placeholder="Type or paste numbers here, one per line e.g  &#10;98XXXXXXXX  &#10;94XXXXXXXX"
                className="mt-1 rounded-md border border-gray-300 p-2.5 outline-none focus:border focus:border-sky-600"
                minRows="4"
                required
              />
              <Box className=" flex justify-between">
                <Box>
                  <FormControlLabel
                    onChange={handleDuplicateChecked}
                    control={<Checkbox />}
                    label="Remove Duplicate"
                  />
                  <FormControlLabel
                    onChange={handleInvalidChecked}
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
