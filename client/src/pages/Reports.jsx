import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BulkReports from "../components/Reports/BulkReports";
import SearchData from "../components/Reports/SearchData";
import APIReports from "../components/Reports/APIReports";

function Reports() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Search SMS Details
      </h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Reports Tab">
            <Tab
              className="text-base capitalize"
              label="Bulk Requests"
              value="1"
            />
            <Tab
              className="text-base capitalize"
              label="API Reports"
              value="2"
            />
            <Tab
              className="text-base capitalize"
              label="Search Data"
              value="3"
            />
          </TabList>
        </Box>

        <TabPanel value="1">
          <BulkReports />
        </TabPanel>
        <TabPanel value="2">
          <APIReports />
        </TabPanel>
        <TabPanel value="3">
          <SearchData />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Reports;
