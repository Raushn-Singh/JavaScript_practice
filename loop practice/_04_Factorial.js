//Factorial Calculation: Write a program to calculate the factorial of a number using a for loop.


let number = parseInt(prompt("Enter the Number"))

let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(fact)