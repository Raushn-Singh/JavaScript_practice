// Array
// let name=["mohit",24,true,"kumar"]
// console.log(name)

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

// name[4]="singh";
// console.log(name);
// console.log(name[4]);
// name[1]=25;
// console.log(name);

// console.log(name.length)

// Array Method
// push
// let fruits=["apple","banana","orange"];
// fruits.push("mango");
// console.log(fruits)
// console.log(fruits.length)

// // pop method
// let lastfruit=fruits.pop();
// console.log(fruits)
// console.log(lastfruit)


// //shift method
// let firstfruit=fruits.shift();
// console.log(fruits)

// //unshift method
// fruits.unshift("grapes");
// console.log(fruits)










// Array iteration with forEach()
// Transforming Arrays with map()
// Filtering Arrays with filter()
// Finding items with find() & indexOf()
// Sorting Arrays with sort()

//forEach()  
// let fruits=["apple","banana","orange"];
// fruits.forEach((fruit)=>{
//   console.log(fruit);
// })



// map 
// let number=[1,2,3,4,5]
// let doubleNumber=number.map((num)=>{
//   return num*2;
// })

// console.log(doubleNumber);


//filter
// let numbers=[1,2,3,4,5]
// let evenNumbers=numbers.filter((num)=>{
//   return num%2==0;
// })
// console.log(evenNumbers)


//find() it takes the first match items

// let numbers=[1,2,3,4,5]
// let foundNumber=numbers.find((number)=>number>3)
// console.log(foundNumber) //output 4


// // indexOf()
// let fruits=["apple","banana","cherry"];
// let index=fruits.indexOf("banana");
// console.log(index) //output 1


//sort()
// let numbers=[5,3,8,12,23]
// numbers.sort((a,b)=>a-b);
// console.log(numbers) 






//reduce()--->Reducing Arrays to a Single value
// const numbers=[1,2,3,4,5,6];

// const sum=numbers.reduce((accumulator,currentValue)=>{
//   return accumulator+currentValue;
// },0);
// console.log(sum)


//slice vs splice
// const fruits2=['apple','banana','cherry','date','mango']
// const slicedFruits=fruits2.slice(1,3);//ye original array ko modify nahi karta 
// console.log(slicedFruits);
// console.log(fruits2)

//splice 
// ye original array ko modify kart hai


// const fruits=['apple','banana','cherry','date','mango']
// // const fruitsSpliced =fruits.splice(1,2);
// const fruitsSpliced=fruits.splice(1,2,"x","y")
// console.log(fruitsSpliced);
// console.log(fruits)


// concat()
// const array1=[1,2,3,4,5]
// const array2=[6,7,8,9,10];
// console.log(array1.concat(array2))


//flat() array 
// const nestedArray=[1,2,[3,4],[5,6]];
// const flattenedArray=nestedArray.flat();
// console.log(flattenedArray)


// Spread  operator(...)

// copy merge and pass array as an argument
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// console.log([...array1, ...array2])

//destructuring array
// const array3 = [1, 3, 4, 2]
// const [a, b, c, d] = array3
// console.log(a)




let arr = [2, 4, 6, 8, 10]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
arr[4] = "Rahul"
console.log(arr)


//push --> Add at the end 
arr.push(20)
console.log(arr)
//pop --> remove at the end and return it
console.log(arr.pop())// array ki last value ko remove kar diya and usi valuw ko return kar diya

//unshift--> Add to start
arr.unshift(30)
console.log(arr)
//shift --> remove from start and return it
arr.shift()
console.log(arr)

//indexOf

console.log(arr.indexOf(8))

//includes
console.log(arr.includes(100))

let even = [2, 4, 6, 8, 10]
let odd = [1, 3, 5, 7, 9]
let newArr = even.concat(odd)//concat is used to merge two arrays
console.log(newArr)
console.log(newArr.reverse())


//slice -->
let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1.slice(1, 3)//slice is used to get a part
console.log(arr2)

let colors = ['red', 'blue', 'yellow', 'black']

// console.log(colors.splice(0, 2))//splice is used to remove and add

colors.splice(0, 2, "Voilet", "Magenta", "Cyan", "Golden")
console.log(colors)

//sort()
console.log(colors.sort())

let Arr1 = [1]
let Arr2 = [1]

console.log(Arr1 == Arr2)//false

let newArr1 = Arr1
console.log(newArr1 == Arr1)//true

newArr1.push(10)
console.log(newArr1)
console.log(Arr1)

const arr3 = [1, 2, 3, 4]

arr3.push(100)
console.log(arr3)

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4)

console.log(arr4[0])
console.log(arr4[1])
console.log(arr4[2])
console.log(arr4[3])
console.log(arr4[4])


for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i])
}


//function -->it is block of code which can be called multiple times
function greet(name) {
  console.log(`Hello ${name}`)
}

greet("Rahul")

function sayHello() {
  console.log("Hello")
}
sayHello()

let arr = [10, 30, 40, 50, 60]

arr.push(60)
arr.pop()
arr.shift()
arr.unshift(30)
arr.indexOf(30)


//block
//lexical
//function


function outer() {
  let x = 10
  let y = 20
  function inner() {
    console.log(x)
    console.log(y)
  }
}

