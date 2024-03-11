import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonalDetail from "../components/Profile/PersonalDetail";
import TwoFactorAuthentication from "../components/Profile/TwoFactorAuthentication";
import AccountDetail from "../components/Profile/AccountDetail";

function Profile() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight  text-slate-950">
        User Profile
      </h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Profile Tab">
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

        <TabPanel value="1">
          <PersonalDetail />
        </TabPanel>
        <TabPanel value="2">
          <AccountDetail />
        </TabPanel>
        <TabPanel value="3">
          <TwoFactorAuthentication />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Profile;
