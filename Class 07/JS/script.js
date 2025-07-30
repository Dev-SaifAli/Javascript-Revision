let rightNow = new Date(); // constructor | data-type is object

setInterval(() => {
  console.log("new Date() :>> ", new Date());
}, 2000);

// Clear Date
const clearDate = () => {
  document.getElementById("input-date").value = "";
};

// Show output
const showOutput = (output) => {
  document.getElementById("output").innerHTML = output;
};

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get Name of Today
function getNameOfToday() {
  let rightNow = new Date(); // constructor | data-type is object
  let theDay = rightNow.getDay(); // week days number
  // showOutput(dayName);
  let nameOfToday = dayNames[theDay];
  showOutput(nameOfToday);
}
