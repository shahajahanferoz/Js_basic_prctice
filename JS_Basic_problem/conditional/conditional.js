// Exercise 1: Simple if Statement
// Declare a variable with a numeric value.
// Write an if statement to check if the value is greater than 10.
// If the condition is met, use console.log to display a message indicating that the value is greater than 10.

let number1 = 33;
if (number1 > 10) {
    console.log("the number 1 value is greater than 10");
}


// Exercise 2: if...else Statement
// Declare a variable with a numeric value.
// Write an if...else statement to check if the value is even or odd.
// Display a message using console.log indicating whether the value is even or odd.

if (number1 % 2 == 0) {
    console.log("This is an even number.");
} else {
    console.log("This is an odd number.");
}



// Exercise 3: if...else if...else Statement
// Declare a variable with a numeric value representing a student's score.
// Write an if...else if...else statement to assign a grade based on the score ranges:
// Score >= 90: "A"
// Score >= 80: "B"
// Score >= 70: "C"
// Score >= 60: "D"
// Otherwise: "F"
// Display the grade using console.log.

let score = 65;
if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}


// Exercise 4: Conditional (Ternary) Operator
// Declare a variable with a numeric value.
// Use the conditional (ternary) operator ? to determine whether the value is positive or negative.
// Display a message using console.log indicating the sign of the value.

console.log(number1 < 0 ? "This is a negetive number." : "This is a Positive Number.");

// Exercise 5: Nested if Statements
// Declare two variables, one representing a user's age and another representing whether they have a driver's license (true or false).
// Write nested if statements to check if the user is eligible to drive:
// If the user is 18 or older and has a driver's license, display a message that they can drive.
// If the user is 16 or older but doesn't have a driver's license, display a message to apply for a license.
// If the user is younger than 16, display a message that they cannot drive.

let age = 26;
let isDrivingLicience = false;
if(age >= 20 && isDrivingLicience){
    console.log('you can drive.')
}
if(age >= 16 && !isDrivingLicience){
    console.log("Apply for a license");
}  
if(age < 16){
    console.log("You cannot drive.");
}


// Exercise 6: Using prompt and Conditional Statements
// Use the prompt function to ask the user for their age.
// Write an if...else statement to check if the user is old enough to vote (18 or older).
// Display a message using console.log indicating whether the user can vote or not.

const prompt = require('prompt-sync')();

let takeAge = prompt("Please give your age. \n");
if (takeAge >= 18 ) {
    console.log("you can vote.");
} else {
    console.log("you can not give Vote.");
}

