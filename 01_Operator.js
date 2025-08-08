let a = 10;
let b = 20;

console.log("Arithmetic operator")
console.log(`${a}+${b} is ${a + b}`);
console.log(`${a}-${b} is ${a - b}`);
console.log(`${a}*${b} is ${a * b}`);
console.log(`${a}/ ${b} is ${a / b}`);
console.log(`${a} % ${b} is ${a % b}`);

console.log("---Relational operator---");
console.log(`${a}>${b} is ${a > b}`);
console.log(`${a}<${b} is ${a < b}`);
console.log(`${a}>=${b} is ${a >= b}`);
console.log(`${a}<=${b} is ${a <= b}`);
console.log(`${a}==${b} is ${a == b}`);
console.log(`${a}!=${b} is ${a != b}`);


console.log("----Assignment Operator----")
let c = 10;
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)
console.log(++a)

console.log("logical operator")
let d = true;
let e = false;




// unary operator : only single operand is required
// binary operator : two operands required
// ternary operator : three operands required

// 1. unary operator
// ++ , --
var num = 10;
num = num + 1;
console.log(num);


// binary operator
// 1. Arithmetic operator 
var num = 10;
var num1 = 20;
console.log(num + num1);
console.log(num - num1)
console.log(num * num1)
console.log(num / num1)
console.log(num % num1)


// 2. Relational operator
console.log(10 < 20);
console.log(10 > 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 == 20); // value
console.log(10 != 20);
console.log(10 === 20); // value and type
console.log(10 !== 20);
console.log(10 == "10");// value


// logical operator && , || , !

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);


// Assignment operator =,+=,*=,-=,/=
var num = 10;
num = num + 10;
console.log(num);
num += 10;
console.log(num);
num *= 10;
console.log(num);

// 3 .ternary operator
// syntax : condition ? value1 : value2

var num = 10;
var num1 = 20;
var max = num > num1 ? num : num1;
console.log(max);

























