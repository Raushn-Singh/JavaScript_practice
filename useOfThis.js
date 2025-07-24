//this -->this is a reserve keyword on javaScript which use to call the current object and its properties and methods
// console.log(this);
// "use strict"
// function thisfun() {
//   console.log(this);
// }
// thisfun();

// const Person = {
//   name: "John",
//   age: 30,
//   sayName: function () {
//     console.log(this)
//   }
// };

// Person.sayName()


const Person = {
  name: "John",
  age: 30,
  sayName: () => {
    console.log(this)
  }
};

Person.sayName()

