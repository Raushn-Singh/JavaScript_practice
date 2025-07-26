// // String-->Sequence of character
// let name="Mohit kumar $ 123";
// console.log(name);

// // declaration of String
// let name1="Mohit Kumar";
// let name2='Mohit Kumar';
// let name3=`Mohit Kumar`; //es-6 dynamic string 
// console.log(name1);
// console.log(name2);
// console.log(name3);

// // String Concatenation
// let firstName="Mohit";
// let lastName="Kumar";
// console.log(firstName+" "+lastName)


// //Template literals
// console.log(`${firstName}` +` `+`${lastName}`);

// // escape character
// //new line  \n
// let text ="Hello \n Mohit";
// console.log(text);
// // single quote \'
// let text2="Hello\' Mohit kumar "
// console.log(text2);
// // back slash \\ quote
// let text3="Hello \\ Mohit kumar"
// console.log(text3);
// // tab
// let text1 ="Hello \t Mohit";
// console.log(text1)



// String Methods
//length-->
let str="Mohit";
console.log(str.length);

//toUpperCase // toLowerCase
let str1="Mohit";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// charAt()
let str2="Hello";
console.log(str2.charAt(3));

//indexOf()--> it return the index of character which is present in the string
let str3="Hello";
console.log(str3.indexOf("h"))

//includes()-->
let str4="Hello";
console.log(str4.includes("l"))

// slice()  vs subString()
let str5="Mohit";
console.log(str5.slice(0,3));

console.log(str5.substring(0,3));

//replace() method
let str6="Mohit kumar"
console.log(str6.replace("Mohit","Rahul"));

//split() method
let str7="Mohit kumar"
console.log(str7.split(" "));

//trim() method
let str8="   Mohit kumar   "
console.log(str8.trim());

//concat() method
let str9="Mohit";
console.log(str9.concat(" Kumar"))
































