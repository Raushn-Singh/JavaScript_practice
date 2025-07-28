let number = prompt("Enter the Number")
if (number % 2 == 0) {
  console.log(number + " is even")
}
else {
  console.log(number + " is odd")
}

//using ternary operator
let number1 = prompt("Enter the Number")
console.log(number1 % 2 == 0 ? number1 + " is even" : number1 + "Is Odd")
