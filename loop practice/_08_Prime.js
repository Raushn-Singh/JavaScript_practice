//Prime Number Check: Write a program to check if a number is prime using a for loop




let number = parseInt(prompt("Enter the Numbed"))

for (let i = 2; i < number / 2; i++) {
  if (number <= 1) {
    console.log("Not A prime Number ")
    break;
  }
  else if (number % i == 0) {
    console.log("Not A prime Number ")
    break;
  }
  else {
    console.log("Prime Number")
    break;
  }

}








// function isPrime(num) {
//   if (num <= 1) {
//     return false
//   }

//   let i = 2
//   while (i <= num / 2) {
//     if (num % i == 0) {
//       return false
//     }
//     i++;
//   }

//   return true;

// }

// console.log(isPrime(2))