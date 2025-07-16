let friends = ["Saif", "Munir", "Naseer"];
friends.push("Miss Maila "); // add at the last
console.log("friends :>> ", friends);

friends.pop(); // remove from the last
console.log("friends :>> ", friends);

friends.unshift("Amina GR"); // add at the start
console.log("friends :>> ", friends);

friends.shift(); // remove from the start
console.log("friends :>> ", friends);

// -----------------------

let users = ["Ahmad", "Bilal", "Aftab", "Zain", "Ali Tahir", "Khurrum"];
let copyOfUsers = users.slice(1);
console.log("users :>> ", users);
console.log("copyOfUsers :>> ", copyOfUsers);

copyOfUsers.pop();
console.log("copyOfUsers :>> ", copyOfUsers);

let firstName = "Abdullah";
let updatedFirstName = firstName.slice(0, 5);
console.log("firstName :>> ", firstName);
console.log("updatedFirstName :>> ", updatedFirstName);

users.splice(2, 0, "Sultan", "Ali Junior");
console.log("users :>> ", users);

users.splice(1, 1);
console.log("users :>> ", users);

//slice is for copy array, and declaration is must to get the copy of an array e.g; let newArray = array.slice(1)
// splice is for delete elements of an array and must have 2 parameters e.g; users.splice(1,1).. 1st is array-index and 2nd is delete count.

// -------------------------
// Clear input
const clearInput = () => {
  return (document.getElementById("input-box").value = "");
};
const inputValue = () => {
  return document.getElementById("input-box").value;
};

// Clear output
const clearOutput = () => {
  document.getElementById("output-box").innerHTML = "";
};

let originalText =
  "I love my country Pakistan.<br/>I like my city Faisalabad.<br/>I love my Homeland.";

document.getElementById("originalString").innerHTML = originalText;

// lowerCase

function lowerCase() {
  clearOutput();
  //   clearInput();
  document.getElementById("output-box").innerHTML = originalText.toLowerCase();
  //   let value = inputValue();
  //   document.getElementById("output-box").innerHTML += value.toLowerCase();
}

// upperCase

function upperCase() {
  // clearOutput();
  document.getElementById("output-box").innerHTML = originalText.toUpperCase();
}

// capitalize

function capitalize() {
  // clearOutput();
  document.getElementById("output-box").innerHTML =
    '<span style="text-transform: capitalize;">' + originalText + "</span>";
}

// better formatting
function betterFormatting() {
  let text = inputValue();
  if (text === "") {
    alert("Please enter your name.");
    return;
  }
  let lowerCaseText = text.toLowerCase();

  document.getElementById("output-box").innerHTML =
    '<span style="text-transform: capitalize;">' + lowerCaseText + "</span>";
}

// print all cities

let cities = [
  "Faisalabad",
  "Lahore",
  "Islamabad",
  "Karachi",
  "Multan",
  "Peshawar",
  "Quetta",
];
function printCities() {
  clearOutput();
  cities.forEach(function (city, index) {
    document.getElementById("output-box").innerHTML += `${
      index + 1
    }) ${city} </br>`;
  });
}

//add city in the list

// function addCity() {
//   let newCity = inputValue().toLowerCase();
//   if (!newCity) {
//     alert("Please enter city name.");
//     return;
//   }
//   // check for city in list
//   let cityExists = cities.some(function (city) {
//     return city.toLowerCase() === newCity;
//   });
//   if (cityExists) {
//     // alert("City already exists in the list.");
//     document.getElementById("output-box").innerHTML =
//       '<span class="text-danger fw-bold">' +
//       newCity +
//       "</span>  already exists in the list.";

//     return;
//   }

//   cities.push(newCity.charAt(0).toUpperCase() + newCity.slice(1));
//   document.getElementById("output-box").innerHTML = document.getElementById(
//     "output-box"
//   ).innerHTML =
//     '<span class="text-success fw-bold">' +
//     newCity +
//     "</span>  added into the list.";
// }

function addCity() {
  let newCity = inputValue();

  if (!newCity) {
    alert("Please enter city name.");
    return;
  }

  let cityFirstLetter = newCity.slice(0, 1).toUpperCase();
  let cityAllLetters = newCity.slice(1).toLowerCase();
  let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
  console.log("cityWordInCapitalize :>> ", cityWordInCapitalize);

  let cityFound = false;

  for (let i = 0; i < cities.length; i++) {
    if (cityWordInCapitalize === cities[i]) cityFound = true;
    document.getElementById("output-box").innerHTML =
      '<span class="text-danger fw-bold">"' +
      cityWordInCapitalize +
      '" </span> already exists in the list.';
  }
  if (cityFound === false) {
    cities.push(cityWordInCapitalize);
    document.getElementById("output-box").innerHTML =
      '<span class="text-success fw-bold">"' +
      cityWordInCapitalize +
      '" </span> added into the list.';
  }
}

// check City

function checkCity() {
  let newCity = inputValue();

  if (!newCity) {
    alert("Please enter city name.");
    return;
  }

  let cityFirstLetter = newCity.slice(0, 1).toUpperCase();
  let cityAllLetters = newCity.slice(1).toLowerCase();
  let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
  console.log("cityWordInCapitalize :>> ", cityWordInCapitalize);

  let cityFound = false;

  for (let i = 0; i < cities.length; i++) {
    if (cityWordInCapitalize === cities[i]) cityFound = true;
    document.getElementById("output-box").innerHTML =
      '<span class="text-success fw-bold ">"' +
      cityWordInCapitalize +
      '" </span> found in the list. &#128151';
  }
  if (cityFound === false) {
    // cities.push(cityWordInCapitalize);
    document.getElementById("output-box").innerHTML =
      'SORRY &#128154; we couldn\'t find your city <span class="text-danger fw-bold">"' +
      cityWordInCapitalize +
      '"</span> in the list. </br> Click <span class="text-success fw-bold">"Add your city in List"</span> to add your city.';
  }
}

// find word
function findWord() {
  let word = inputValue();
  if(!word){
    alert("Please enter the word.")
    return;
  }
  word =  word.toLowerCase();
  let newOriginalText = originalText.toLowerCase();
  let findWord =  newOriginalText.indexOf(word);
  if(!findWord==-1){
    document.getElementById(output-box).innerHTML = Your <span class = "text-success">"+ word" 
  }
}