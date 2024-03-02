import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SendIcon from "@mui/icons-material/Send";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import Dashboard from "./../pages/Dashboard";

function Sidebar() {
  return (
    <div>
      <Box
        className="z-sidebar fixed bottom-0 left-0 top-0 bg-black text-white"
        role="presentation"
        // onClick={toggleDrawer(false)}
      >
        <Link to="/">
          <DashboardIcon className="mx-auto my-2 w-full fill-slate-200 text-[3.5rem]" />
        </Link>

        <ul className="grid place-content-center gap-6 pt-10">
          <Tooltip arrow title="Dashboard" placement="right">
            <Link to="/">
              <li className="px-6">
                <DesktopWindowsOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Link>
          </Tooltip>
          <Link to="/">
            <li className="px-6">
              <SendIcon className="fill-gray-400 text-[2rem]" />
            </li>
          </Link>
          <Link to="/">
            <li className="px-6">
              <AssessmentOutlinedIcon className="fill-gray-400 text-[2rem]" />
            </li>
          </Link>
          <Tooltip arrow title="Entity" placement="right">
            <Link to="/">
              <li className="px-6">
                <TableViewOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Link>
          </Tooltip>
          <Tooltip arrow title="Sender" placement="right">
            <Link to="/">
              <li className="px-6">
                <InboxOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Link>
          </Tooltip>
          <Tooltip arrow title="Templates" placement="right">
            <Link to="/">
              <li className="px-6">
                <InventoryOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Link>
          </Tooltip>
        </ul>
      </Box>
    </div>
  );
}

export default Sidebar;
