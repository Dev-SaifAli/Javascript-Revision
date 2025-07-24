// inputValue
const inputValue = () => {
  return document.getElementById("input-text").value;
};
// clearInput

const clearInput = () => {
  return (document.getElementById("input-text").value = "");
};

// showOuput
const showOutput = (output) => {
  return (document.getElementById("output").innerHTML = output);
};

// clearOutput
const clearOutput = () => {
  return (document.getElementById("output").innerHTML = "");
};

// Round a number
function round() {
  let number = inputValue();
  if (!number) {
    Toastify({
      text: "Please enter a number",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #314341ff, #1a1c18ff)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return;
  }

  let roundNumber = Math.round(number);
  showOutput(roundNumber);
}

// ceil a number
function ceil() {
  let number = inputValue();
  if (!number) {
    Toastify({
      text: "Please enter a number",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #314341ff, #1a1c18ff)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return;
  }

  let ceilNumber = Math.ceil(number);
  showOutput(ceilNumber);
}
// floor a number

function floor() {
  let number = inputValue();
  if (!number) {
    Toastify({
      text: "Please enter a number",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return;
  }

  let floorNumber = Math.floor(number);
  showOutput(floorNumber);
}

// random number
function random() {
  let randomNumber = Math.random();
  showOutput(randomNumber);
}

// dice

function dice() {
  let randomNumber = Math.random();
  randomNumber = randomNumber * 6 + 1;
  let dice = Math.floor(randomNumber);
  let html = "<h1>" + dice + "</h1><span>Generating a number from 1-6</span>";
  showOutput(html);
}

// random string

function randomString() {
  let randomString = "";
  let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseAlphabets = upperCaseAlphabets.toLowerCase();
  let numbers = "0123456789";
  let symbols = `\`~!@#$%^&*()_-+"'?/`;
  let possibleString =
    upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
  // console.log('possibleString :>> ', possibleString);

  // let limit = 16; // defines the length of the string
  let limit = inputValue();
  if (!limit) {
    Toastify({
      text: "Please enter the length of string.",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #314341ff, #1a1c18ff)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return;
  }
  for (i = 0; i < limit; i++) {
    let randomNumber = Math.random();
    randomString += possibleString.charAt(
      Math.floor(randomNumber * possibleString.length)
    );
  }

  let html =
    "<h6>" +
    randomString +
    '</h6> Generating random string & the length is <span class="text-danger">' +
    limit +
    "</span>";

  showOutput(html);
}

let randomPassword = Math.random().toString(36).slice(3);
console.log("randomPassword :>> ", randomPassword); // llx1vvq6ut
