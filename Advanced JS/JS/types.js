// Primitive Data types => that store a  value.

let a = 1;
let b = "1";
let c = false;
let d;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e); // Whether we have set value to null, but type is object, that is actually mistaken.

// _____________________________

const youtube = {
  name: "Irfan Malik",
  subs: "435k",
};

youtube.prof = "Data Scientist";
console.log(youtube.prof);
console.log(youtube); 

console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(function (){}))
