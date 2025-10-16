// class is a type of function. But instead of using the keyword function we used class keyword and the name of function starts with the Uppercase letter. and the properties are defined inside the constructor function. constructor function automatically calls when the object is created.

// classes are the template for creating objects.
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const myCar = new Car("Ford");
console.log(myCar);
console.log(myCar.brand);

// Method in Classes
// this keyword refers to the object it belongs to.
{
  class Car {
    constructor(name) {
      this.brand = name;
    }
    present() {
      return "I have a " + this.brand;
    }
  }
  const myCar = new Car("Ford"); // Object created!🎉
  console.log(myCar);
  console.log(myCar.present());
}

{
  class Car {
    // constructor method
    constructor(name, year) {
      // Properties defined. this  keyword  refer to the object that will be created in future.
    //   this refers to object, or jo bhi object create hoga.. inside 2 properties are created with the v
      this.brand = name;
      this.year = year;
    }
  }
  const myCar = new Car("Ford", "2025");
  console.log(myCar.brand, myCar.year);
}


