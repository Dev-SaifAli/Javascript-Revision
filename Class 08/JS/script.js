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
