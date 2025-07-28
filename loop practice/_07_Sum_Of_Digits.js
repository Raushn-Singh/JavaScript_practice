let number = parseInt(prompt("Enter the number"))

let num = number
let sum = 0

while (num > 0) {
  let digit = num % 10
  sum += digit
  num = Math.floor(num / 10)

}