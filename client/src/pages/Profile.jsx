import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Profile() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="max-w-[34.2rem]">
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        User Profile
      </h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              className="text-base capitalize"
              label="Personal Details"
              value="1"
            />
            <Tab
              className="text-base capitalize"
              label="Account Details"
              value="2"
            />
            <Tab
              className="text-base capitalize"
              label="2-Factor Authentication"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">Personal Details</TabPanel>
        <TabPanel value="2">Account Details</TabPanel>
        <TabPanel value="3">2-Factor Authentication</TabPanel>
      </TabContext>
    </Box>
  );
}

export default Profile;
