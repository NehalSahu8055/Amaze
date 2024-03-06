export function getCurrentTime() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var meridiem = " AM";
  if (hours > 12) {
    hours -= 12;
    meridiem = " PM";
  }

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var formattedTime = hours + ":" + minutes + ":" + seconds + meridiem;

  return formattedTime;
}
