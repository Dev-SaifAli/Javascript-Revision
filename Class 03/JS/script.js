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
  let num1 = 15;
  let num2 = 20;
  if (num1 > num2) {
    alert("Yes, condition is true");
  } else {
    alert("Condition is False.");
  }
};
