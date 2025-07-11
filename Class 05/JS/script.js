let friends = ["Saif", "Munir", "Naseer"];
friends.push("Miss Maila "); // add at the last
console.log("friends :>> ", friends);

friends.pop(); // remove from the last
console.log("friends :>> ", friends);

friends.unshift("Amina GR"); // add at the start
console.log("friends :>> ", friends);

friends.shift(); // remove from the start
console.log("friends :>> ", friends);

// -----------------------

let users = ["Ahmad", "Bilal", "Aftab", "Zain", "Ali Tahir", "Khurrum"];
let copyOfUsers = users.slice(1);
console.log("users :>> ", users);
console.log("copyOfUsers :>> ", copyOfUsers);

copyOfUsers.pop();
console.log("copyOfUsers :>> ", copyOfUsers);

let firstName = "Abdullah";
let updatedFirstName = firstName.slice(0, 5);
console.log("firstName :>> ", firstName);
console.log('updatedFirstName :>> ', updatedFirstName);

users.splice(2,2,"Sultan", "Ali Junior");
console.log('users :>> ', users);
