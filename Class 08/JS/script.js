function ifElseStatement() {
  let now = new Date();
  let today = now.getDay();
  console.log(today);
  if (today === 0) {
    alert("Today is Sunday");
  } else if (today === 1) {
    alert("Today is Monday");
  } else if (today == 2) {
    alert("Today is Tuesday");
  } else if (today === 5) {
    alert("Today is Friday");
  } else {
    alert("It's Some other day");
  }
}

// Switch Statement

function switchStatement() {
  let userInput = document.getElementById("userInput").value;
  if (!userInput) {
    alert("Please enter the word");
  }
  switch (true) {
    case userInput.includes("a", 0):
    case userInput.includes("e", 0):
    case userInput.includes("i", 0):
    case userInput.includes("o", 0):
    case userInput.includes("u", 0):
      alert("The word starts with a vowel");

      break;

    default:
      alert("This is a Consonant");
      break;
  }
}

// do while

// function doWhile() {
//   do {
//     let password = +prompt("Enter your password to login");
//     output.innerHTML = password;
//   } while (password === 12345);
// }

function doWhile() {
  let password; // declare outside so it's accessible in while()

  do {
    password = +prompt("Enter your password to login");
    // output.innerHTML = password;
  } while (password !== 12345);

  output.innerText = "Access granted!";
}

var i = 6;
do {
  console.log(i);
  i++;
} while (i < 5);
console.log("False condition");

// Guess number
function guessNumber() {
  let attempts = 0;
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log("randomNumber :>> ", randomNumber); // 2
  let userGuessNumber; // declare variable
  do {
    attempts++;
    userGuessNumber = +prompt("Guess the number");
    console.log("attempts :>> ", attempts);
    console.log("userGuessNumber :>> ", userGuessNumber); // 3
    if (userGuessNumber !== randomNumber && attempts < 3) {
      alert("Wrong guess, try again");
    }

    // alert("Wrong guess, try again");
  } while (userGuessNumber !== randomNumber && attempts < 3);
  alert("Congratulations! You guessed it right!");
}
