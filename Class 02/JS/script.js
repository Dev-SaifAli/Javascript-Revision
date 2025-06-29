// clear output

const clearOutput = () => {
  document.getElementById("output").innerHTML = "";
};

// clear statement
const clearStatement = () => {
  document.getElementById("statement").innerHTML = "";
};

// ---------------


let string = "Saif Ali Qadri";

// Alert string
document.getElementById("alertString").onclick = function () {
  alert(string);
  let statement = 'alert("Saif Ali Qadri")';
  document.getElementById("statement").innerHTML = statement;
  document.getElementById("output").innerHTML = "";
};

// Alert number
document.getElementById("alertNumber").onclick = function () {
  alert(7291);
  let statement = "alert(7291)";
  document.getElementById("statement").innerHTML = statement;
  document.getElementById("output").innerHTML = "";
};

// variable names

document.getElementById("variableNames").onclick = function () {
  let html =
    "<ul style = 'list-style-position: inside;'><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, dollar signs and underscores.</li><li>Though a variable name can't be any of Javascript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask Javascript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";
  document.getElementById("statement").innerHTML = "";
  document.getElementById("output").innerHTML = html;
};

//camelCase examples

document.getElementById("camelCase").onclick = function () {
  let html =
    "<h4>Examples</h4><ul><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";
  document.getElementById("statement").innerHTML = "";
  document.getElementById("output").innerHTML = html;
};

// postfix and prefix operators

let x = 1;
++x;
let y = ++x;

console.log("x :>> ", x);
console.log("y :>> ", y);

let a = 1;
a--;
let b = a--;
let c = a--;

console.log("a:>> ", a);
console.log("b :>> ", b);
console.log("c :>> ", c);

document.getElementById("sum").onclick = function () {
  let num1 = 15;
  let num2 = 10;
  let sum = num1 + num2;
  let statement =
    "<h4><code>let num1 =15; <br>let num2 = 10;<br>let sum = num1+num2;<br></code></h4>";
  document.getElementById("statement").innerHTML = statement;
  document.getElementById("output").innerHTML = sum;
};
