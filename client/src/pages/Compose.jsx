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
  const [composeNormalData, setcomposeNormalData] = useState();
  const [composeUnicode, setcomposeUnicode] = useState();
  const [composeCustom, setcomposeCustom] = useState();
  const [composeAdvance, setcomposeAdvance] = useState();
  const [composeLargeFiles, setcomposeLargeFiles] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <h2 className="pb-1 text-3xl font-semibold tracking-tight  text-slate-950">
        SMS Compose
      </h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Compose Tab">
            <Tab
              className=" text-base capitalize"
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

        <TabPanel className="-mx-7 -my-8" value="1">
          <ComposeNormal setFormData={setcomposeNormalData} />
        </TabPanel>
        <TabPanel className="-mx-7 -my-8" value="2">
          <ComposeUnicode setFormData={setcomposeUnicode} />
        </TabPanel>
        <TabPanel className="-mx-7 -my-8" value="3">
          <ComposeCustom setFormData={setcomposeCustom} />
        </TabPanel>
        <TabPanel className="-mx-7 -my-8" value="4">
          <ComposeAdvance setFormData={setcomposeAdvance} />
        </TabPanel>
        <TabPanel className="-mx-7 -my-8" value="5">
          <ComposeLargeFile setFormData={setcomposeLargeFiles} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Compose;
