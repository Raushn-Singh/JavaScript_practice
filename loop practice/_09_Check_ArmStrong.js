//Write a program to check whether a given number is Armstrong or not.(153 cube of every single digit is same as the number you cubed means 1^3+5^3+3^3 = 153)


let number = parseInt(prompt("Enter the Number"))
let n = number
let sum = 0;
while (n > 0) {
  let digit = n % 10
  sum = sum + digit * digit * digit
  n = Math.floor(n / 10)
}

if (number == sum) {
  console.log(number, "is an Armstrong Number")
}
else {
  console.log(number, "is not an Armstrong Number")
}  