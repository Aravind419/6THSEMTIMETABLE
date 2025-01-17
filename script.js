const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
const currentDayId = `${days[today]}-table`;

// Highlight the current day's table
document.getElementById(currentDayId).classList.add("active-day");
