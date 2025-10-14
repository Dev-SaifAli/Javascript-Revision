var a = "hello guys..";
function first() {
  let b = "How are you?";
  second();

  function second() {
    // inner functions can get access to required variables from outside their own scope - child functions can get access parent function variables - and even they don't found it check in the global scope.. ya parent ya global
    var c = "Myself Saif Ali";
    console.log(a + b + c);
    three();
  }
}
function three() {
  var d = "I am a full stack developer.";
  console.log(a + b + c + d);
}
first();

function outer() {
  let name = "Saif";
  function inner() {
    console.log(name); // inner can access outer's variable
  }
  inner();
}
outer();

let city = "Faisalabad";
function outer() {
  let area = "Madina Town";
  function inner() {
    let street = "Jinnah Street";
    console.log(street);
    console.log(area);
    console.log(city);
  }
  inner();
}
outer();


