document.getElementById("zipCode").addEventListener("focus", function () {
  this.style.backgroundColor = "yellow";
});

document.getElementById("zipCode").addEventListener("blur", function () {
  this.style.backgroundColor = "white";
  autoCityName();
});

// object with key values
let zipToCity = {
  38000: "Faisalabad",
  47000: "Lahore",
  58000: "Islamabad",
};

function autoCityName() {
  let zipCode = document.getElementById("zipCode").value;
  let city = document.getElementById("city");
  if (zipToCity[zipCode]) {
    // check if zipCode key is present in that object - returns value
    city.value = zipToCity[zipCode];
  } else {
    city.value = "";
  }
}
// let paragraphs = document.getElementsByTagName("p");
// console.log("paragraphs", paragraphs);

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = "green";
// }

let paragraphs = document.querySelectorAll("p");
console.log("paragraphs :>> ", paragraphs);

paragraphs.forEach(function (p) {
  p.style.color = "green";
});
