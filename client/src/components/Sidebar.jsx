import { Box, Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SendIcon from "@mui/icons-material/Send";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import Dashboard from "./../pages/Dashboard";
import HoverSidebar from "./HoverSidebar";
import ItemsArray from "../data/ItemsHoverSideBar";

function Sidebar() {
  const [isComposeHover, setisComposeHover] = useState(false);
  const [isReportHover, setisReportHover] = useState(false);

  const handleComposeHover = () => {
    setisComposeHover((prev) => !prev);
  };
  const handleReportHover = () => {
    setisReportHover((prev) => !prev);
  };

  return (
    <div>
      <Box
        className="fixed bottom-0 left-0 top-0 z-sidebar bg-[#000000f8] text-white"
        role="presentation"
      >
        <Link to="/">
          <DashboardIcon className="mx-auto my-2 w-full fill-slate-200 text-[3.5rem]" />
        </Link>

        <ul className="relative grid place-content-center gap-6 pt-10">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            to="/"
          >
            <Tooltip arrow title="Dashboard" placement="right">
              <li className="px-6">
                <DesktopWindowsOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Tooltip>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            to="/compose"
            onMouseOver={handleComposeHover}
            onMouseOut={handleComposeHover}
          >
            <li className="px-6">
              <SendIcon className="fill-gray-400 text-[2rem]" />
            </li>
          </NavLink>
          {isComposeHover && <HoverSidebar props={ItemsArray[0]} />}
          Hello
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            onMouseOver={handleReportHover}
            onMouseOut={handleReportHover}
          >
            <li className="px-6">
              <AssessmentOutlinedIcon className="fill-gray-400 text-[2rem]" />
            </li>
          </NavLink>
          {isReportHover && <HoverSidebar props={ItemsArray[1]} />}
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            to="/entities"
          >
            <Tooltip arrow title="Entity" placement="right">
              <li className="px-6">
                <TableViewOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Tooltip>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            to="/sender"
          >
            <Tooltip arrow title="Sender" placement="right">
              <li className="px-6">
                <InboxOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Tooltip>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "child:child:fill-gray-300" : ""}`
            }
            to="/templates"
          >
            <Tooltip arrow title="Templates" placement="right">
              <li className="px-6">
                <InventoryOutlinedIcon className="fill-gray-400 text-[2rem]" />
              </li>
            </Tooltip>
          </NavLink>
        </ul>
      </Box>
    </div>
  );
}

export default Sidebar;
