// Date "25-06-2025"

document.getElementById("btn").onclick = function () {
  document.getElementById("heading").innerHTML = "I'm Learning JS";
  document.getElementById("heading").style.backgroundColor = "RED";
  document.getElementById("heading").style.color = "white";
};

document.getElementById("btn-reset").onclick = function () {
  document.getElementById("heading").innerHTML = "Learning JS";
  document.getElementById("heading").style.backgroundColor = "transparent";
  document.getElementById("heading").style.color = "black";
};

document.getElementById("light-on").onclick = function () {
  document.getElementById("img-bulb").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
  document.body.style.backgroundColor = "transparent";
};

document.getElementById("light-off").onclick = function () {
  document.getElementById("img-bulb").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
  document.body.style.backgroundColor = "black";
};
