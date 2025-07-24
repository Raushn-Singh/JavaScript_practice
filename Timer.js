console.log("Start");
setTimeout(() => {
  console.log("Execute code after 2 sec.");
}, 2000)
console.log("End")


//SetInterval
// console.log("Start");
// setInterval(() => { console.log("Repeat Code Every 1 Sec") }, 1000)
// console.log("end")

//clearInterval()
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Repeat Code Every 1 Sec.")
  if (count === 5) {
    clearInterval(interval);
    console.log("Interval Cleared");
  }
}, 1000)

//clearTimeout
const timeoutId = setTimeout(() => {
  console.log("Timeout Cleared");
}, 5000)
clearTimeout(timeoutId);
console.log("Timeout Cleared");



