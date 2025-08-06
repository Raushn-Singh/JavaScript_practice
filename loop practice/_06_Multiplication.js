//Multiplication Table: Write a program to print the multiplication table of a number entered by the user using a for loop.

let number = parseInt(prompt("Enter the Number"))

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i)
}