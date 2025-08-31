// Inside object data type semicolon ; used nahi hoga only comma, then next key value pair

// let user = {
//   firstName: "Saif",
//   lastName: "Ali",
//   city: "Faisalabad",
//   country: "Pakistan",
//   age: 21,
//   location: {
//     longitude: 2654.454,
//     latitude: 1545.154,
//   },
//   fullName: function () {
//     // function inside the user is called object.
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log("user :>> ", user);

// const users1 = [];
// users1.push(user);
// console.log("users1 :>> ", users1);

// console.log("user :>> ", user.location.latitude);
// console.log("user :>> ", user["location"]["latitude"]);

let askedFromUser = "lastName"; // variable declare
// console.log("user :>> ", user.askedFromUser); // check if there is any askedFromUser property name exist in user object
// console.log("user :>> ", user["askedFromUser"]); // same if we used variable name in string - check property name
// console.log("user:>>", user[askedFromUser]); // check value of the variable

let shop = {
  name: "Ali Store",
  owner: {
    fullName: "Saif Ali",
  },
  products: [
    { title: "Perfume", price: 1200 },
    { title: "Soap", price: 1200 },
  ],
};

console.log(shop.owner.fullName);
console.log(shop.products[0]?.price);
console.log(shop.products[1]?.price);
console.log(shop.products[3]?.title);

let student = {
  name: "Munir",
  marks: {
    math: 85,
    english: 90,
    computer: 70,
  },
};

let subjects = ["math", "english", "physics"];

subjects.forEach((sub) => {
  console.log(`${sub}:${student.marks?.[sub] ?? "Not Available"} `);
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

const marks = [100, 150, 200, 250, 300];
marks.forEach((a) => {
  console.log("marks :>> ", a);
});

const names = ["Ali", "Ahmad", "Amina Shafique", "Munir", "Naseer"];
names.forEach((value, index) => {
  console.log(`${index}:${value} `);
});

// names to hogia array name
// forEach method array
// parameters that fetch values from the array such as 1st param is actual value , 2nd is the index, and the 3rd is complete array

// console.log("user.fullName :>> ", user.fullName());

// Show Output
function showOutput(output) {
  document.getElementById("outputTable").innerHTML = output;
}

// Clear Output
function clearOutput() {
  document.getElementById("outputTable").innerHTML = "";
}

// Notification

function showNotification(message, type) {
  let bgColor;
  switch (type) {
    case "success":
      bgColor = "linear-gradient(to right, #00b09b, #96c93d)";
      break;
    case "error":
      bgColor = "linear-gradient(to right, #b03500ff, #c98c3dff)";
      break;
  }
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: { background: bgColor },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// Get Field Value

let getFieldValue = (ID) => {
  return document.getElementById(ID).value;
};

// email regex
const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// random ID
const getRandomID = () => {
  return Math.random().toString(36).slice(2);
};

function handleSubmit() {
  event.preventDefault();
  let firstName = getFieldValue("firstName");
  let lastName = getFieldValue("lastName");
  let email = getFieldValue("email");
  let dob = getFieldValue("dob");
  console.log(firstName);

  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  console.log(firstName);

  if (firstName.length < 3) {
    showNotification("Please enter your first name correctly", "error");
  }
  if (lastName.length < 3) {
    showNotification("Please enter your last name correctly", "error");
  }
  if (!emailFormat.test(email)) {
    showNotification("Please enter your email correctly", "error");
  }
  if (!dob) {
    showNotification("Please enter your date of birth", "error");
  }
}

// let user = {
//   firstName: firstName,
//   lastName: lastName,
//   email: email,
//   dob: dob,
// };
// if property name has same name as variable name, we use only property name it can fetch and store values from that same name variable
let user = {
  firstName,
  lastName,
  email,
  dob,
};

user.id = getRandomID();
user.dateCreated = new Date().getTime();
const users = [];
users.push(user);
showNotification("A new user has been successfully added", "success");
