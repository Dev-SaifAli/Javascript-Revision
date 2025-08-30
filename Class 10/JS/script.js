// Inside object data type semicolon ; used nahi hoga only comma, then next key value pair

let user = {
  firstName: "Saif",
  lastName: "Ali",
  city: "Faisalabad",
  country: "Pakistan",
  age: 21,
  location: {
    longitude: 2654.454,
    latitude: 1545.154,
  },
};
console.log("user :>> ", user);

const users1 = [];
users1.push(user);
console.log("users1 :>> ", users1);

console.log("user :>> ", user.location.latitude);
console.log("user :>> ", user["location"]["latitude"]);

let askedFromUser = "lastName"; // variable declare
console.log("user :>> ", user.askedFromUser); // check if there is any askedFromUser property name exist in user object
console.log("user :>> ", user["askedFromUser"]); // same if we used variable name in string - check property name
console.log("user:>>", user[askedFromUser]); // check value of the variable

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
names.forEach((value, array) => {
  console.log(`${index}:${value} `);
});

// names to hogia array name
// forEach method array
// parameters that fetch values from the array such as 1st param is actual value , 2nd is the index, and the 3rd is complete array
