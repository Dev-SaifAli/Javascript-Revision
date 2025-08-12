// document.getElementById("currentTime").innerHTML = new Date();

// let rightNow = new Date(); // constructor | data-type is object

// setInterval(() => {
//   console.log("new Date() :>> ", new Date());
// }, 2000);

// Toastify
function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #ea7312ff, #694611ff)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// Clear Date
const clearDate = () => {
  document.getElementById("input-date").value = "";
};

// Clear Output
const clearOutput = () => {
  document.getElementById("output").innerHTML = "";
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

  passedDays = passedDays / (1000 * 60 * 60 * 24 * 365);
  showOutput(passedDays);
}

// Next Birthday
function nextBirthday() {
  let DOB = inputDate();
  if (!DOB) {
    alert("invalid input, try again");
    return;
  }
  let nextDOB = new Date(DOB);
  console.log("nextDOB :>> ", nextDOB);
  let today = new Date();
  let daysDifference = nextDOB.getTime() - today.getTime();
  daysDifference = daysDifference / (1000 * 60 * 60 * 24);

  showOutput(`Your next birthday is in ${Math.floor(daysDifference)} days.✨`);
}

let greeting = "";

function greetUser(userName, greeting) {
  showOutput(`${greeting} ${userName}`);
}
function greetUserButton() {
  let userName = prompt(`Enter your name`);
  userName = userName.toUpperCase();
  let hour = new Date().getHours();

  if (hour >= 4 && hour < 12) {
    greeting = "🌅 Good Morning!";
  } else if (hour >= 12 && hour < 18) {
    greeting = "🌞 Good Afternoon!";
  } else if (hour >= 18 && hour < 22) {
    greeting = "🌇 Good Evening!";
  } else {
    greeting = "🌙 Good Night!";
  }
  greetUser(userName, greeting);
  // console.log("greeting :>> ", greeting);
}

// Tell Time

function tellTime() {
  let now = new Date();
  let theHr = now.getHours();
  let theMin = now.getMinutes();
  let theSec = now.getSeconds();

  let time = `You click the button @ ${theHr}:${theMin}:${theSec}`;
  document.getElementById("output").innerHTML += `${time}<br/>`;
}

function tellTime1() {
  tellTime();
}
function tellTime2() {
  tellTime();
}
function tellTime3() {
  tellTime();
}

// Calculate Tax btn

function calculateTaxBtn() {
  const price = +prompt("Enter price.");
  if (!price) {
    showToast("Please enter price");
    return;
  }
  // let taxRate = null;
  // if (price < 1000) {
  //   taxRate = 8;
  // } else {
  //   taxRate = 17;
  // }

  const taxRate = price < 1000 ? 8 : 17;
  const tax = calculateTax(price, taxRate); // function calling
  // const total = Math.round(calculateTotal(price, tax)); // function call
  const total = Math.round(price + tax);
  // console.log("taxRate :>> ", taxRate);
  // console.log("tax :>> ", tax);
  let html = `Price: ${price}/- </br> Tax Rate: ${taxRate}/- </br> Tax : ${tax}/- </br> Total : ${total}/- `;
  showOutput(html);
}
// declare function
function calculateTax(price, taxRate) {
  var tax = (price * taxRate) / 100;
  return tax;
}

// function calculateTotal(price, tax) {
//   let total = tax + price;
//   return total;
// }
