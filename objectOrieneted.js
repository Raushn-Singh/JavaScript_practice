class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello,my name is ${this.name} and I am ${this.age}`)
  }
}

const person1 = new person("john", 30);
person1.greet();