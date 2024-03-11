import React from "react";
import dayjs from "dayjs";

const currentTime = dayjs();

const formattedTime = currentTime.format("YYYY-MM-DD HH:mm");

function getCurrentDateTime() {
  return formattedTime;
}

export default getCurrentDateTime;
