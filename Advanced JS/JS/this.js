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

user.fullName();

// -------------------------------

const obj = {
  name: "Saif Ali",
  qualification: "BSCS",
  sum: function () {
    // Here, sum is a method.
    console.log(this.name);
    var add = 2 + 2;
    console.log("Sum of two numbers is " + add);
    console.log(this);
    function child() {
      console.log(this);
    }
    child();
  },
  child: function () {
    // Here, child is a method.
    var name = "Saif";
    console.log("child method name " + name);
    console.log(this);
  },
};
obj.child();
obj.sum();
