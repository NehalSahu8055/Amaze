import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InventoryIcon from "@mui/icons-material/Inventory";
import DownloadingSharpIcon from "@mui/icons-material/DownloadingSharp";
import KeyIcon from "@mui/icons-material/Key";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, NavLink } from "react-router-dom";
import { Button, ClickAwayListener, Divider, Paper } from "@mui/material";
import QuickSmsDropDown from "./QuickSmsDropDown";

function Navbar() {
  let balanceCount = 1000;

  const [open, setOpen] = useState(false);
  const [quickSmsOpen, setquickSmsOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const toggleQuickSms = () => {
    setquickSmsOpen((prev) => !prev);
  };

  return (
    <Paper
      component="header"
      className="fixed left-0  right-0 top-0 z-header ml-[4.5rem]  rounded-none px-8 py-2 font-['Poppins'] "
      elevation={3}
    >
      <nav className="flex items-center justify-between">
        {/* <Button onClick={toggleDrawer(true)} className="text-slate-900">
          <DashboardIcon className="text-[2.5rem]" />
        </Button> */}
        <ul className="flex justify-between gap-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "child:child:stroke-sky-600 child2:text-sky-600" : ""} group flex items-center gap-2`
              }
              to="/sms-reports"
            >
              <span>
                <AssessmentIcon className="fill-slate-50 stroke-black group-hover:stroke-sky-600" />
              </span>
              <span className="group-hover:text-sky-600">SMS Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "child:child:stroke-sky-600 child2:text-sky-600" : ""} group flex items-center gap-2`
              }
              to="/purchases"
            >
              <span>
                <InventoryIcon className="fill-slate-50 stroke-black group-hover:stroke-sky-600" />
              </span>
              <span className="group-hover:text-sky-600">Purchases</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "child:child:fill-sky-600 child2:text-sky-600" : ""} group flex items-center gap-2`
              }
              to="/downloads"
            >
              <span>
                <DownloadingSharpIcon className="group-hover:fill-sky-600" />
              </span>
              <span className="group-hover:text-sky-600">Downloads</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "child:child:fill-sky-600 child2:text-sky-600" : ""} group flex items-center gap-2`
              }
              to="/apikeys"
            >
              <span>
                <KeyIcon className="group-hover:fill-sky-600" />
              </span>
              <span className="group-hover:text-sky-600 ">API Keys</span>
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-between gap-5">
          <li>
            <div className="flex items-center gap-2">
              <AccountBalanceWalletIcon className="fill-slate-50 stroke-black group-hover:stroke-sky-600" />
              <div>
                <span className="pr-1.5">Balance</span>
                <span className="font-semibold text-sky-600">
                  {balanceCount}
                </span>
              </div>
              <Divider
                className="h-5"
                orientation="vertical"
                variant="middle"
                flexItem
              />
            </div>
          </li>
          <li className="relative flex items-center">
            <Button
              onClick={toggleQuickSms}
              className="flex items-center gap-2"
            >
              <span>Quick SMS</span>
              <span className="flex gap-2">
                <PersonIcon />
                <ChevronRightIcon
                  className={`${quickSmsOpen ? "rotate-90" : "rotate-0"}`}
                />
              </span>
            </Button>
            {quickSmsOpen && (
              <ClickAwayListener onClickAway={toggleQuickSms}>
                <div>
                  <QuickSmsDropDown
                    quickSmsOpen={quickSmsOpen}
                    toggleQuickSms={toggleQuickSms}
                  />
                </div>
              </ClickAwayListener>
            )}
          </li>
        </ul>
      </nav>
    </Paper>
  );
}

export default Navbar;
