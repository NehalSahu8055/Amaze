import { Box, Button, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SettingsIcon from "@mui/icons-material/Settings";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function QuickSmsDropDown({ quickSmsOpen, toggleQuickSms }) {
  return (
    <Paper
      className="absolute right-2 top-[3.2rem] w-[22rem] rounded-t-none  "
      role="presentation"
      //   onClick={toggleQuickSms}
      elevation={3}
      hidden={!quickSmsOpen}
    >
      <ul className="flex flex-col justify-between text-white">
        <li className="bg-slate-900 px-6 py-4">
          <h3 className="text-lg capitalize">quick sms</h3>
          <p className="flex gap-3">
            <span className="font-thin">support@amaze.com</span>
            <span className="bg-white px-2 font-semibold text-slate-900 ">
              ID 710051
            </span>
          </p>
        </li>
        <li className=" border-b border-b-slate-300 px-2.5 py-2 ">
          <Link to="/profile">
            <Button className="group flex w-full items-center justify-start gap-4  text-slate-800">
              <PersonIcon className="  group-hover:fill-sky-600" />
              <span className="text-[1rem] capitalize group-hover:text-sky-600">
                Profile
              </span>
            </Button>
          </Link>
        </li>
        <li className=" border-b border-b-slate-300 px-2.5 py-2 ">
          <Link to="/api-manual">
            <Button className="group flex w-full items-center justify-start gap-4  text-slate-800">
              <ContentPasteIcon className="  group-hover:fill-sky-600" />
              <span className="text-[1rem] capitalize group-hover:text-sky-600">
                API Manual
              </span>
            </Button>
          </Link>
        </li>
        <li className=" border-b border-b-slate-300 px-2.5 py-2 ">
          <Link to="/settings">
            <Button className="group flex w-full items-center justify-start gap-4  text-slate-800">
              <SettingsIcon className="  group-hover:fill-sky-600" />
              <span className="text-[1rem] capitalize group-hover:text-sky-600">
                Settings
              </span>
            </Button>
          </Link>
        </li>
        <li className=" border-b border-b-slate-300 px-2.5 py-2 ">
          <Link to="/change-password">
            <Button className="group flex w-full items-center justify-start gap-4  text-slate-800">
              <LockOutlinedIcon className="  group-hover:fill-sky-600" />
              <span className="text-[1rem] capitalize group-hover:text-sky-600">
                Change Password
              </span>
            </Button>
          </Link>
        </li>
        <li className=" border-b border-b-slate-300 px-2.5 py-2 ">
          <Link to="/logout">
            <Button className="group flex w-full items-center justify-start gap-4  text-slate-800">
              <LogoutOutlinedIcon className="  group-hover:fill-sky-600" />
              <span className="text-[1rem] capitalize group-hover:text-sky-600">
                Logout
              </span>
            </Button>
          </Link>
        </li>
      </ul>
    </Paper>
  );
}

export default QuickSmsDropDown;
