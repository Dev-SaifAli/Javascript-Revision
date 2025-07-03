// Write a program to find the maximum between three numbers

let num1 = 100;
let num2 = 500;
let num3 = 7500;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(`num1 is greater = ${num1}`);
  } else {
    console.log(`num3 is greater = ${num3}`);
  }
} else if (num2 > num3) {
  console.log(`num2 is greater = ${num2}`); //false
} else {
  console.log(`num3 is greater = ${num3}`);
}
