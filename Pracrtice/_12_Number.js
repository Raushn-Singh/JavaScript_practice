// Take number input from the user
let number = parseFloat(prompt("Enter a number:"));

// Use ternary operator to determine the result
let result = (number > 0)
  ? "The number is positive."
  : (number < 0)
    ? "The number is negative."
    : "The number is zero.";

// Display the result
alert(result);
