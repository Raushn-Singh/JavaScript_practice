// Take number input from the user
let number = parseInt(prompt("Enter a number:"));

// Check if at least one condition is true using logical OR (||)
let result = (number > 10 || number % 2 === 0)
  ? "At least one condition is true."
  : "Neither condition is true.";

// Display the result
alert(result);
