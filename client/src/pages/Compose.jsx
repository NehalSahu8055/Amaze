import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ComposeNormal from "./../components/Compose/ComposeNormal";
import ComposeUnicode from "./../components/Compose/ComposeUnicode";
import ComposeCustom from "./../components/Compose/ComposeCustom";
import ComposeLargeFile from "./../components/Compose/ComposeLargeFile";
import ComposeAdvance from "./../components/Compose/ComposeAdvance";

function Compose() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        SMS Compose
      </h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Compose Tab">
            <Tab
              className="w-screen text-base capitalize"
              label="Compose Normal"
              value="1"
            />
            <Tab
              className="text-base capitalize"
              label="Compose Unicode"
              value="2"
            />
            <Tab
              className="text-base capitalize"
              label="Compose Custom"
              value="3"
            />
            <Tab
              className="text-base capitalize"
              label="Compose Advance"
              value="4"
            />
            <Tab
              className="text-base capitalize"
              label="Compose Large File"
              value="5"
            />
          </TabList>
        </Box>

        <TabPanel value="1">
          <ComposeNormal />
        </TabPanel>
        <TabPanel value="2">
          <ComposeUnicode />
        </TabPanel>
        <TabPanel value="3">
          <ComposeCustom />
        </TabPanel>
        <TabPanel value="4">
          <ComposeAdvance />
        </TabPanel>
        <TabPanel value="5">
          <ComposeLargeFile />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Compose;
