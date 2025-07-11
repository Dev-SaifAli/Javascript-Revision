// clearInput
const clearInput = () => {
  document.getElementById("input-box").value = "";
  //   return;
};

// clearOutput
const clearOutput = () => {
  document.getElementById("output-box").innerText = "";
};

// -----------------

// simple alert

function simpleAlert() {
  alert("This is an alert.📢");
  return;
}

// print name
function printName() {
  let name = document.getElementById("input-box").value;
  if (!name) {
    alert("Please enter name");
  }
  document.getElementById("output-box").innerHTML = name;
  return;
}

// print cities
let cities = [
  "Faisalabad",
  "Karachi",
  "Lahore",
  "Multan",
  "Islamabad",
  "Burewala",
  "Kashmir",
];

// console.log('cities :>> ', cities);
function printCities() {
  clearOutput();
  clearInput();

  for (let i = 0; i < cities.length; i++) {
    // console.log("cities :>> ", cities[i]);
    let num = i + 1;
    document.getElementById("output-box").innerHTML +=
      num + ")" + cities[i] + "<br/>";
  }
}
// add city
function addCity() {
  let city = document.getElementById("input-box").value;
  if (!city) {
    alert("Please enter city name.");
  }
  cities.push(city);
  console.log("cities :>> ", cities);
}

// generate table
function generateTable() {
  // let num = +prompt('Enter a number');
  let num = parseInt(document.getElementById("input-box").value);
  if (!num) {
    alert("please enter number..");
    return;
  }
  // clearOutput();
  for (let i = 1; i <= 10; i++) {
    document.getElementById("output-box").innerHTML += `${num} * ${i} = ${
      num * i
    } <br/>`;
  }
}
