// Take age input from the user
let age = parseInt(prompt("Enter your age:"));

// Take citizenship status input from the user
let isCitizen = prompt("Are you a citizen? (yes/no):").toLowerCase();

// Check voting eligibility
if (age >= 18 && isCitizen === "yes") {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote.");
}
