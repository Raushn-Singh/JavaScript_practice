// Take GPA input from the user
let gpa = parseFloat(prompt("Enter your GPA:"));

// Ask if the student is involved in any extracurricular activities
let hasExtracurricular = prompt("Are you involved in any extracurricular activities? (yes/no)").toLowerCase();

// Check eligibility for scholarship
if (gpa >= 3.5 && hasExtracurricular === "yes") {
  alert("You are eligible for the scholarship.");
} else {
  alert("You are not eligible for the scholarship.");
}
