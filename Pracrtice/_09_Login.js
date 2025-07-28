let userType = prompt("Enter the user type")
let password = prompt("Enter the password")

if (userType === "admin" && password === "password123") {
  console.log("Login SuccessFull")
}
else {
  console.log("Login failed")
}