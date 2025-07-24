// let number=20;
// console.log(number);


// // var name="John";
// // var name="Doe";
// // console.log(name);



// let name="John";
// name="Doe";
// console.log(name);





// console.log(x);
// var x=5;

// console.log(x);
// let x=5;

// let x;
// console.log(x);
// x=5;

// // primitive data type
// String 
// Number
// Boolean
// null
// undefined
// BigInt
// Symbol

// //Non Primitive data type
// Object(Collection of key values pair)

// Array(Ordered list of values)

// Function(Reusable code block)

// let name=null; // typeof name will return object

// console.log(name)

// let abc;
// console.log(abc) // undefined

// let bigintValue=123456789n;
// console.log(bigintValue);
// console.log(typeof bigintValue); // big int

// // Symbol
// let sym=Symbol('hello');
// console.log(sym);
// console.log(typeof sym); // symbol


// Heap Memory vs Stack Memory
// Stack Memory-->Static Memory Allocation
// 1. Memory is allocated at compile time
// 2. Memory is allocated for primitive data types
// Heap Memory
// 1. Memory is allocated at runtime
// 2. Memory is allocated for non-primitive data types



// let person={
//   name:'Rahul',
//   age:25,
//   address:{
//     street:'123 main st',
//     city:'NYC',
//     state:'NY'
//     }
// }

// console.log(person)



// let fruits=["Apple","Banana","Mango"];
// console.log(fruits);
// // type of fruits is object

// function greet(){
//   console.log("Hello");
// }
// greet();



// data type  conversion 
//1 Number 
// let num="123";
// let valueToNumber=Number(num)
// console.log(valueToNumber);//o/p : 123
// let num1="123xyz";
// let valueToNumber1=Number(num1)
// console.log(valueToNumber1);// o/p : NaN


// let num3=null;
// let valueToNumber3=Number(num3)
// console.log(valueToNumber3);


// let num4=undefined;
// let valueToNumber4=Number(num4)
// console.log(valueToNumber4)

// let num5=true;
// let valueToNumber5=Number(num5)
// console.log(valueToNumber5)

// //2. boolean
// let bool="true";
// let valueToBoolean=Boolean(bool)
// console.log(valueToBoolean)//o/p : true


// let bool1="false";
// let valueToBoolean1=Boolean(bool1)
// console.log(valueToBoolean1)//o/p : true


// let bool2="xyz";
// let valueToBoolean2=Boolean(bool2)
// console.log(valueToBoolean2)//o/p : true


// let bool3=null;
// let valueToBoolean3=Boolean(bool3)
// console.log(valueToBoolean3)//o/p : false

// let bool4="0"
// let valueToBoolean4=Boolean(bool4)
// console.log(valueToBoolean)

// let bool5=undefined;
// let valueToBoolean5=Boolean(bool5);
// console.log(valueToBoolean5);


// string 
// let str="123";
// let valueToString=String(str)
// console.log(valueToString)//o/p : 123


// // Arithmetic operator

// let num1=10;
// let num2=20;
// console.log("Addition",num1+num1);
// console.log("Subtraction",num1-num2);
// console.log("Multiplication",num1*num2);
// console.log("Division",num1/num2);
// console.log("Modulus",num1%num2);
// console.log("Exponentiation",num1**num2);
// console.log("Increment",num1++);
// console.log("Decrement",num1--)
// console.log("Increment",++num1);
// console.log("Decrement",--num1);


// //logical operator
// let x=true;
// let y=false;
// console.log("AND",x&&y);
// console.log("OR",x||y);
// console.log("NOT",!x);


// //comparison operator
// let a=10;
// let b=20;
// console.log("Equal to",a==b);
// console.log("Equal to",a===b);
// console.log("Not Equal to",a!=b);
// console.log("Not Equal to",a!==b);
// console.log("Greater than",a>b);
// console.log("Greater than or equal to",a>=b);
// console.log("Less than",a<b);
// console.log("Less than or equal to",a<=b);


// //assignment operator
// let num=10;
// console.log("Addition assignment",num+=5);
// console.log("Subtraction assignment",num-=5);
// console.log("Multiplication assignment",num*=5);
// console.log("Division assignment",num/=5);
// console.log("Modulus assignment",num%=5);
// console.log("Exponentiation assignment",num**=5);


// for loop , while, do-while,for-in,for-of

// for(intialization; condition;increment/decrement)
// for(let i=0; i<10; i++){

//   console.log(i);
// }


//  for in loop
// for(variable in object){
//    // code here    
//}

// let person={fname:"Mohit",lname:"Kumar",age:25};

// for(let key in person){
//   console.log(key,":",person[key]);
// }

// for of loop -->array or string
// for(variable of iterable){
//  code to be executed
//}

// let fruits=["apple","mango","cherry"];
// for(let fruit of fruits){
//   console.log(fruit);
// }


// // string
// let str="hello";
// for(let x of str){
//   console.log(x);
// }


// const students=[
//   {name:"mohit",age:25},
//   {name:"Ranjan",age:20},
//   {name:"Rana",age:23},]

//   for(let student of students){
//     console.log(student.name,student.age);
//   }


// while loop
//while(condition){
//code to be executed
//}
// let i=0;
// while(i<10){
//   console.log(i);
//   i++;
// }


// do-while loop
// do{
//code to be executed
//}while(condition)

// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<10)


// control statement
//if-else switch ternary operator



// let age=18;
// if(age>=18){
//   console.log("you are an adult");
// }
// else{
//   console.log("you are a minor");
// }

// let mark=80;
// if(mark>=80){
//   console.log("you are in first division");
// }else if(mark>=60){
//   console.log("you are in second division");
// }else if(mark>=40){
//   console.log("you are in third division");
// }else{
//   console.log("you are in fourth division");
// }



// switch statement
// let day=5;
// switch(day){
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
  
// }


// // ternary operator
// // condition ? value if true : value if false

// let age =18;
// let result =age>=18 ?"you are eleigible to vote":"You are not eligible to vote";
// console.log(result);  



// // function --> block of reusable code that perform a specific tasks
// //function declaration   named function
// function greet(name){
//   console.log(`hello ${name}`);
// }
// greet("john");
// // function expression  anonymous function
// let speak = function(name){
//   console.log(`hello ${name}`);
//   }
//   speak("john");

//   // Arrow function -ES6
//   const sayHello = (name) => {
//     console.log(`hello ${name}`);
//     }
//     sayHello("john");

    // scope and hoisting
    // scope - where a variable is accessible
    // hoisting - moving variable to top of the script

    // global scope - accessible from anywhere
    // let globalVariable = "I am global";
    //  function greet1(){
    //   console.log(`Hello ${globalVariable}`);

    //  }
    //  greet1();
    // // local scope function scope - accessible only within the block
    //       function greet(){
    //         let localVariable = "I am local";
    //         console.log(`Hello ${localVariable}`);
    //       }
    //        greet();  
    // block scope - accessible only within the block
    // it is not applicable for var
      // {
      //   let name="Mohit kumar";
      //   console.log(`Hello ${name}`);
      // }


      // hoisting -- javascript me koi bhi varaible ya function hua decalration ko top pe le jata
      // var hoisting
      // var a=10;
      // console.log(a);
       
      // jb code execute hua to v8 engine ne aise hi read kia
    //  var a;
      // console.log(a);//undefined
      // a=10;
  //let or const
//  let hoisting
  // let a=10;
  // console.log(a);

  // let a;
  // console.log(a);// undefined
  // a=10;

//   console.log(a);// refrence error   state temporal dead zone me chla jata hai
//   let a=10;


// // function hoisting
//   function greet(){
//     console.log("Hello")
//   }
//   greet();

  // arrow function hoisting 
  let greet1 = () => {
    console.log("Hello");
    }
    greet1();

    // function expression
    greet2();
    let greet2 = function(){
      console.log("Hello");
      }
      greet2();


      