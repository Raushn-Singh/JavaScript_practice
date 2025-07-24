// parseInt-- parseInt string ko number me convert karne ke liye]
//prompt -- user se input lena hai



let number1 = parseInt(prompt("Enter your first number:"));
let number2 = parseInt(prompt("Enter your Second number:"));
let number3 = parseInt(prompt("Enter your third number:"));
let number4 = parseInt(prompt("Enter your fourth number:"));
let number5 = parseInt(prompt("Enter your fifth number:"));

//calculate the sum
let sum = number1 + number2 + number3 + number4 + number5;

// calculate the avg
let avg = sum / 5;

//display the avg using template literals
alert(`"The average of the numbers is:${avg}`)
//display the avg 
console.log("The average of the numbers is: ", avg);



// find the area of circle
let radius = parseInt(prompt("Enter the radius of the circle:"));
let area = 3.14 * radius * radius;
alert(`"The area of the circle is:${area}"`);

// find the area of triangle
let base = parseInt(prompt("Enter the base value"));

let height = parseInt(prompt("Enter the height value"));

let areaOfTriangle = 0.5 * base * height;
alert(`"The area of the triangle is:${areaOfTriangle}"`);

// find the area of rectangle
let length = parseInt(prompt("Enter the length of the rectangle"));
let width = parseInt(prompt("Enter the width of the rectangle"));
let areaOfRectangle = length * width;
alert(`"The area of the rectangle is:${areaOfRectangle}"`);


// Simple interest
let principal = parseInt(prompt("Enter the value of Principal"));
let rate = parseInt(prompt("Enter the value of rate"));
let time = parseInt(prompt("Enter the value of time"));
let interest = (principal * rate * time) / 100;