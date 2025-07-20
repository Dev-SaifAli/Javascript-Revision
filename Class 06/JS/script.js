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
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return;
  }

  let roundNumber = Math.round(number);
  showOutput(roundNumber);
}
