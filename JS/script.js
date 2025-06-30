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
