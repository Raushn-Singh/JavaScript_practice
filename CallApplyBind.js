function greet(city) {
  console.log(`My Name is ${this.name} and My City is : ${city}`);
}

const person = {
  name: "Mohit"
}

//without using call
greet(person, "Delhi")

//using call  this lo manually set karta hai
greet.call(person, "Delhi");

greet.apply(person, ["Delhi"])

const greetPerson = greet.bind(person, "Delhi");
greetPerson();




const obj1 = {
  name: "Mohit",
  age: 25,
  greet: function () {
    console.log("My name is " + this.name);
  }
}

const getval = obj1.greet.bind(obj1);
console.log(getval())




