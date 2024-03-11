import React from "react";
import dayjs from "dayjs";

const currentTime = dayjs();
const futureTime = currentTime.add(10, "minutes");

const formattedTime = futureTime.format("YYYY-MM-DDTHH:mm");

function getScheduleBaseTimeDate() {
  return formattedTime;
}

export default getScheduleBaseTimeDate;
