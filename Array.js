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
const array1=[1,2,3]
const array2=[4,5,6]
console.log([...array1,...array2])

//destructuring array
const array3=[1,3,4,2]
const[a,b,c,d]=array3
console.log(a)




