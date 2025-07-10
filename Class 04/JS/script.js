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

// console.log('cities :>> ', cities);
function printCities() {
  clearOutput();
  clearInput();
  let cities = [
    "Faisalabad",
    "Karachi",
    "Lahore",
    "Multan",
    "Islamabad",
    "Burewala",
    "Kashmir",
  ];

  for (let i = 0; i < cities.length; i++) {
    // console.log("cities :>> ", cities[i]);
    let num = i + 1;
    document.getElementById("output-box").innerHTML +=
      num + ")" + cities[i] + "<br/>";
  }
}
