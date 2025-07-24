// object
// const person={
//   name:"Mohit",
//   age:22,
//   isTrainer:true,
// };

// console.log(person)

// person.location="India";
// console.log(person)
// delete person.isTrainer;
// console.log(person)

// // nested object
// const person1={
//   name: "Mohit",
//   age:22,
//   isTrainer:true,
//   location:{
//     city:"Delhi",
//     state:"Delhi"
//   },
// }

// console.log(person1)
// console.log(person1.location.city)

// object method 
// const person={
//   name:"Mohit",
//   age:22,
//   isTrainer:true,
//   location:{
//     city:"Delhi",
//     state:"Delhi"
//   },

//   getName:function(){
//    return this.location.city;
//   }
// }

// console.log(person.getName())


// loops in object

// const person={
//   name:"Mohit",
//   age:22,
//   city:"Delhi",
// }
// for(let key in person){
//   console.log(key,person[key])
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// object destructuring 
const person={
  name:"Mohit",
  age:22,
  isTrainer:true,
  location:{
    city:"Delhi",
    state:"Delhi"
  },
};

const {name,age,isTrainer}=person;
console.log(name,age,isTrainer)


// object spread operator
const person1={
  name:"Mohit",
  age:22,
  isTrainer:true,
  location:{
    city:"Delhi",
    state:"Delhi"
  },
}

const person2={
  ...person1,
}

console.log(person2)


// operation chaining
//(?.)

const person3={
  name:"Mohit",
  age:22,
  isTrainer:true,
  location:{
    city:"Delhi",
    state:"Delhi"
  },
}

console.log(person.location?.city);
console.log(person.location?.Country);


//nullish operation
//(??)
const city=person.location?.xyz ?? "Unknown city";
console.log(city)
