//Sum of First N Numbers: Write a program to calculate the sum of the first n natural numbers using a for loop, where n is entered by the user.



let number = parseInt(prompt("Enter the Number"))
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
