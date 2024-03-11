import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import getScheduleBaseTimeDate from "../../utils/getScheduleBaseTimeDate";
import { DateTimePicker } from "@mui/x-date-pickers";

export default function DateAndTimePicker({
  currentTime,
  handleDateTimeChange,
}) {
  const minDateTime = dayjs().startOf("minute");
  const [isOpen, setisOpen] = useState(true);

  const handleAccept = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        className="bg-slate-50 child:child:hidden"
        defaultValue={dayjs(`${currentTime}`)}
        minDateTime={minDateTime}
        onChange={handleDateTimeChange}
        onAccept={handleAccept}
        open={isOpen}
        orientation="landscape"
      />
    </LocalizationProvider>
  );
}
