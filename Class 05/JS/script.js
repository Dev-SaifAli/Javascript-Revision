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


