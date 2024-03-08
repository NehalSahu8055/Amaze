import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LinkIcon from "@mui/icons-material/Link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FilePicker from "../Auxiliary/FilePicker";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function ComposeCustom() {
  const [sender, setsender] = useState();
  const [category, setcategory] = useState();
  const [mobNo, setmobNo] = useState();

  const senderArray = ["1780s890384093", "e128937197491824n"];
  const categoryArray = ["Transaction", "Service", "Promotion"];
  const mobNoArray = ["9011111111", "9013231111", "901311111"];

  const handleCategory = (e, newValue) => {
    setcategory(newValue);
  };
  const handleMobNo = (e, newValue) => {
    setmobNo(newValue);
  };
  const handleSender = (e, newValue) => {
    setsender(newValue);
  };
  return (
    <form
      // ref={customNormalForm}
      // onSubmit={handleCustomNormal}
      className="flex h-fit w-full flex-col gap-6 rounded-md  border border-slate-200 bg-white p-6 pt-2"
      action=""
    >
      <FormControl className="py-2">
        <RadioGroup defaultValue="dynamicSMS" name="radio-buttons-group">
          <Box className="pt-2">
            <FormControlLabel
              value="dynamicSMS"
              control={<Radio />}
              label="Dynamic SMS"
            />
            <FormControlLabel
              value="scheduledMultipleCampaign"
              control={<Radio />}
              label="Scheduled Multiple Campaign"
            />
          </Box>
        </RadioGroup>
      </FormControl>
      <Box className="mb-1 flex flex-1 justify-between gap-4">
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
          className="w-full"
          name="campaignTitle"
          id="campaignTitle"
          label="Campaign Title"
          placeholder="Campaign Title"
          autoComplete="campaignTitle"
          required
          inputProps={{ maxLength: 6 }}
        />

        <TextField
          size="small"
          type="text"
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
      </Box>
      <Box className="flex">
        <Box className="flex w-full gap-4">
          <Box className="flex-[0.5]">
            <Box className="mb-6 child:w-full">
              <div className="flex  justify-between font-semibold text-slate-800">
                <span>Phonebook</span>
                <Button
                  startIcon={<FileDownloadIcon />}
                  className="align-center flex uppercase text-sky-500"
                >
                  Get Sample File
                </Button>
              </div>
              <FilePicker />
            </Box>
            <Box className="grid">
              <span className="font-semibold text-slate-700">Column List</span>
              <TextareaAutosize
                placeholder=""
                className="mt-1 rounded-md border border-gray-300 p-2.5 outline-none focus:border-2 focus:border-sky-600"
                minRows="4"
                required
              />
            </Box>
            <Box className="flex gap-2">
              <Box className=" flex w-full  justify-between gap-2 border px-2 pl-1">
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  startIcon={<LinkIcon />}
                  className="my-1 bg-slate-300 text-xs text-slate-900 hover:bg-slate-300/80"
                >
                  Short URL
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="flex flex-[0.5] flex-col justify-between">
            <Autocomplete
              className="w-full"
              label="Mobile Number"
              onChange={handleMobNo}
              value={mobNo}
              size="small"
              disablePortal
              id="senderID"
              options={mobNoArray}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Mobile Number" />
              )}
              required
            />
            <Box>
              <Box className="grid">
                <span className="font-semibold text-slate-700">
                  Selected Col In order
                </span>

                <TextareaAutosize
                  placeholder=""
                  className="mt-1 rounded-md border border-gray-300 p-2.5 outline-none focus:border-2 focus:border-sky-600"
                  minRows="4"
                  required
                />
              </Box>
              <Button className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-sky-700/90">
                Show Preview
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="flex justify-between gap-4">
          <Box className="flex-[0.5]">
            <TextareaAutosize
              // ref={exactMsgTemplate}
              // value={dataFromTemplate.startsWith("~") ? "" : dataFromTemplate}
              // placeholder="Exact Message from Template"
              className=" w-full rounded-md rounded-b-none border border-gray-300 p-2.5 text-gray-500 outline-none focus:border-2 focus:border-sky-600"
              minRows="5"
              disabled
              required
              readOnly
            />
            <FormControl className="py-2">
              <RadioGroup defaultValue="now" name="radio-buttons-group">
                <Box className="pt-2">
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
          </Box>
          <Box className="flex-[0.5]">
            <TextareaAutosize
              // ref={exactMsgTemplate}
              // value={dataFromTemplate.startsWith("~") ? "" : dataFromTemplate}
              placeholder="Exact Message from Template"
              className=" w-full rounded-md rounded-b-none border border-gray-300 p-2.5 text-gray-500 outline-none focus:border-2 focus:border-sky-600"
              minRows="5"
              disabled
              required
              readOnly
            />
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
                  // onClick={handleClickOpen}
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
                  <span>Aa</span>
                  <span className="pl-2 text-sky-600">
                    {/* {dataFromTemplate.length}&nbsp; */}
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
      <Button
        type="submit"
        className="mt-2 w-fit self-end  bg-sky-700 px-4 capitalize text-white hover:bg-sky-700/90"
      >
        Send Now
      </Button>
      <DateTimePicker />
    </form>
  );
}

export default ComposeCustom;
