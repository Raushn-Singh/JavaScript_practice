//Write a program to check whether a given number is palindrome or not. ( input 121 and reverse it get the same number).

let num = parseInt(prompt("Enter the number"))

let n = num
let rev = 0;
while (n > 0) {
  let rem = n % 10
  rev = rev * 10 + rem
  n = Math.floor(n / 10)
}
if (num == rev) {
  console.log(num, "is a palindrome number")
} else {
  console.log(num, "is not a palindrome number")
}
