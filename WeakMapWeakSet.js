// const sym1 = Symbol("id");
// const sym2 = Symbol("id");
// console.log(sym1 == sym2);// false

//===type checking
//==value checking

// const user = {
//   name: "John",
// };
// const uid = Symbol("id");
// user[uid] = "123";
// console.log(user);// "123"
// console.log(Object.keys(user))


//WeakSet
const user1 = {
  name: "Mohit",
};

const user2 = {
  name: "Rahul",
};


const weekset = new WeakSet();
weekset.add(user1);
weekset.add(user2);
console.log(weekset.has(user1))

// WeakMap
const user = {
  name: "Mohit"
}

const weekmap = new WeakMap();
weekmap.set(user, "Rohit");










