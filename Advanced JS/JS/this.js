// 'this' keyword refers to the 'object' it belongs to.

console.log(this); // Global Object Window.

function add(a, b) {
  let add = a + b;
  console.log(add);
  //   console.log(this);
}
add(20, 20);

const user = {
  firstName: "Saif",
  lastName: "Ali",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
    console.log(this); // Here, this refers to user object
  },
};

object.fullName();
