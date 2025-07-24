// const today=new Date();
// console.log(today)

// const birthday=new Date("1992-01-01");
// console.log(birthday)

// const dateNow=new Date();
// console.log(dateNow)
// console.log(dateNow.getFullYear())
// console.log(dateNow.getMonth())
// console.log(dateNow.getDay())
// console.log(dateNow.getDate())


// let date =new Date();
// date.setFullYear(2025)
// date.setMonth(11)
// date.setDate(11)
// console.log(date)


// date ko string me convert 
let today=new Date()
console.log(today.toDateString())
console.log(today.toTimeString())
console.log(today.toLocaleDateString())


const startDate=new Date("2025-04-01")
const endDate=new Date("2025-04-16")
const timediff=endDate.getTime()-startDate.getTime()
const daysDiff=timediff/(1000*60*60*24)

console.log(`Number of days between ${startDate.toDateString()} and ${endDate.toDateString()} is ${daysDiff} `)