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


//countdown
function updateCountdown() {
  const now = new Date();
  const periods = [
    { id: "period-1", start: "8:45", end: "9:35" },
    { id: "period-2", start: "9:36", end: "10:25" },
    { id: "period-3", start: "10:35", end: "11:25" },
    { id: "period-4", start: "11:26", end: "12:15" },
    { id: "period-5", start: "12:45", end: "13:35" },
    { id: "period-6", start: "13:36", end: "14:25" },
    { id: "period-7", start: "14:35", end: "15:25" },
    { id: "period-8", start: "15:26", end: "16:15" },
  ];

  let found = false;

  periods.forEach((period) => {
    const start = new Date();
    const end = new Date();

    // Parse the start and end times
    const [startHour, startMinute] = period.start.split(":").map(Number);
    const [endHour, endMinute] = period.end.split(":").map(Number);

    start.setHours(startHour, startMinute, 0);
    end.setHours(endHour, endMinute, 0);

    // Check if the current time is within the period
    if (now >= start && now < end) {
      // Highlight the current period
      document.getElementById(period.id).style.backgroundColor = "yellow";
      document.getElementById(period.id).style.fontWeight = "bold";

      // Show countdown to the end of the current period
      const timeLeft = Math.floor((end - now) / 1000); // in seconds
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      document.getElementById(
        "countdown"
      ).textContent = `Current Period: ${period.id.replace(
        "period-",
        ""
      )} | Time left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

      found = true;
    } else {
      // Remove highlight for other periods
      document.getElementById(period.id).style.backgroundColor = "";
      document.getElementById(period.id).style.fontWeight = "";
    }
  });

  if (!found) {
    document.getElementById("countdown").textContent =
      "No ongoing class at the moment.";
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
