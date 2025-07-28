// Take three number inputs from the user
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let c = parseFloat(prompt("Enter the third number:"));

// Use nested ternary operators to find the smallest number
let smallest = (a < b)
  ? (a < c ? a : c)
  : (b < c ? b : c);

// Display the result
alert("The smallest number is: " + smallest);
