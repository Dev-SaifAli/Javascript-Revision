// let message = "Thanks for your input!";
// let userName = "Saif Ali Qadri.";
// let sum = message + " " + userName;
// alert(sum);

// var firstName = "Saif Ali";
// var lastName = "Qadri";
// var fullName = firstName + " " + lastName;
// alert(fullName);

document.getElementById("concatenate").onclick = function () {
  let message = "Good day ";
  let userName = "Saif Ali Qadri!";
  let sum = message + userName;
  alert(sum);
};

function concatenateStrings(msg, userName) {
  alert(`${msg} ${userName}`);
}

// prompt
document.getElementById("askNameFromUser").onclick = function () {
  let firstName = prompt("Please enter your first name");
  let lastName = prompt("please enter your last name");
  let fullName = firstName + " " + lastName;
  console.log("fullName :>> ", fullName);
};

// Comparison operators.

document.getElementById("comparisonOperators").onclick = function () {
  // let num1 = 15;
  // let num2 = 20;

  let num1 = +prompt("Enter your first number");
  if (isNaN(num1)) {
    alert("num1 isn't a Number. please try again");
    return;
  }
  let num2 = +prompt("Enter your second number");
  if (isNaN(num2)) {
    alert("num2 isn't a number. please try again");
  }

  let sum = num1 + num2;
  console.log("sum :>> ", sum);
  // console.log("num1 :>> ", num1);
  // console.log("num2 :>> ", num2);
  if (num1 > num2) {
    alert("Yes, condition is true");
  } else {
    alert("Condition is False.");
  }
};
// if else if

document.getElementById("ifelseif").onclick = function () {
  let num1 = +prompt("Enter your 1st number.🚀");
  if (isNaN(num1)) {
    alert("num1 isn't a number. Please try again.");
    return;
  }
  let num2 = +prompt("Enter your 2nd number.🔥");
  if (isNaN(num2)) {
    alert("num2 isn't a number. Please try again.");
    return;
  }
  if (num1 >= num2) {
    alert("Yes, your 1st condition is true!");
  } else if (num1 == num2) {
    alert("Yes, your 2nd condition is true!");
  } else if (num1 <= num2) {
    alert("Yes, your 3rd condition is true.");
  } else {
    alert("No, your condition is false.");
  }
};

// Testing set of a conditions

document.getElementById("testingSetOfConditions").onclick = function () {
  let age = +prompt("Your age?");
  let weight = +prompt("Your weight");
  if (age >= 18 && weight <= 70) {
    alert("Congratulations🎉, You're a Smart guy.");
  } else if (age >= 18 && weight > 70) {
    alert("You're a Fat guy.");
  } else {
    alert("You're a baby.");
  }
};

// Nested if statement

document.getElementById("ifNestedStatement").onclick = function () {
  let age = prompt("Your age?");

  if (age >= 18) {
    let weight = prompt("Your weight?");

    if (weight <= 70) {
      alert("You're a Smart guy");
    } else {
      alert("You're a fat guy.");
    }
  } else {
    alert("You're a baby.");
  }
};
// login

document.getElementById("login").onclick = function () {
  let userName = prompt("Enter username");
  let password = prompt("Enter password");

  let originalUserName = "admin";
  let originalPassword = "admin";

  if (userName == originalUserName && password == originalPassword) {
    alert("LogIn Successfully!");
  } else {
    alert("invalid username and password");
  }
};
