document.getElementById("currentTime").innerHTML = new Date();

// let rightNow = new Date(); // constructor | data-type is object

// setInterval(() => {
//   console.log("new Date() :>> ", new Date());
// }, 2000);

// Clear Date
const clearDate = () => {
  document.getElementById("input-date").value = "";
};

// Show output
const showOutput = (output) => {
  document.getElementById("output").innerHTML = output;
};

// Input Date
const inputDate = () => {
  return document.getElementById("input-date").value;
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
  console.log("rightNow :>> ", rightNow);
  let theDay = rightNow.getDay(); // week days number
  // showOutput(dayName);
  let nameOfToday = dayNames[theDay];
  showOutput(nameOfToday);
}

// Calculate Days Passed
function calculateDaysPassed() {
  let today = new Date();
  let input = inputDate();
  if (!input) {
    alert("Please enter your DOB");
    return;
  }
  let dob = new Date(input);
  // console.log("dob :>> ", dob);

  let passedDays = today.getTime() - dob.getTime();

  passedDays = passedDays / (1000 * 60 * 60 * 24);
  showOutput(passedDays);
}
