function outer() {
  let name = "Mohit Decodes";
  function inner() {
    console.log(name);
  }
  inner();
}

outer();

//closure
function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  }
}

const greetMohit = greet("Mohit");
greetMohit();




//Prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}`);
}
const user = new Person("Mohit");
user.greet();

//prototype chaining
const animal = {
  eats: true
}

const dog = {
  barks: true
}

dog.__proto__ = animal; //or Object.setPrototypeOf(dog, animal);
console.log(dog.eats); //true
console.log(dog.barks); //true 


