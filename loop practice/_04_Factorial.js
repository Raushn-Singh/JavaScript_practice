let number = parseInt(prompt("Enter the Number"))

let fact = 1;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(fact)