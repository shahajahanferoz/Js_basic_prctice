// Exercise 1: && (AND) Operator
// Declare two variables with boolean values.
// Write an if statement using the && operator to check if both variables are true.
// If the condition is met, use console.log to display a success message.

console.log("Exercise 1: && (AND) Operator");
const var1 = true;
const var2 = true;
if(var1 && var2){
    console.log("THis is true condition for & operator");
}


// Exercise 2: || (OR) Operator
// Declare two variables with boolean values.
// Write an if statement using the || operator to check if at least one of the variables is true.
// If the condition is met, use console.log to display a message indicating that at least one condition is satisfied.

console.log("Exercise 2: || (OR) Operator");
const var3 = false;
if(var1 || var3){
    console.log("THis is true condition for || operator");
}
// Exercise 3: ! (NOT) Operator
// Declare a variable with a boolean value.
// Use the ! operator to negate the value of the variable.
// Write an if statement to check if the negated value is true.
// Display a message using console.log indicating the original and negated values.

console.log("Exercise 3: ! (NOT) Operator");
let var4 = false;
if(!var4 == true){
    console.log("original Value is " + var4);
    console.log("negetive Value is " + !var4);
}


// Exercise 4: Combining Logical Operators
// Declare three variables with boolean values.
// Write an if statement using a combination of && and || operators to create a more complex condition.
// Display a message using console.log to indicate whether the combined condition is true or false.

console.log("Exercise 4: Combining Logical Operators");
const higher = true;
const lower = false;
const result = true;
console.log(higher && lower && result);
console.log(higher && !lower && result);
console.log(higher || lower || result);
console.log(higher && lower || result);


// Exercise 5: Short-Circuit Evaluation
// Declare a variable with a string value.
// Use the && operator to check if the variable is truthy and has a length greater than 0.
// If the condition is met, use console.log to display a message indicating that the string is not empty.

console.log("Exercise 5: Short-Circuit Evaluation");
let myName = "feroz";
if(myName && myName.length > 0){
    console.log("the string is not empty");
}

// Exercise 6: Logical Operators in Ternary Operator
// Declare a variable with a numeric value.
// Use the ternary operator ? along with the && operator to determine whether the value is positive and even.
// Display a message using console.log indicating whether the condition is met.

console.log("Exercise 6: Logical Operators in Ternary Operator");
const semester = 10;
console.log(semester % 2 == 0 && semester >= 0 ? "the value is positive and even": "Either the value is negetive or odd");

// Exercise 7: Complex Logical Expressions
// Declare variables with numeric values representing test scores and a boolean value representing whether a student completed an assignment.
// Write an if statement using logical operators to check if the student's average score is above a certain threshold and they completed the assignment.
// Display a message using console.log indicating whether the student passed or not.

console.log("Exercise 7: Complex Logical Expressions");
const mark = 8 
const CompleteAssignment = true;
console.log(mark > 5 && CompleteAssignment == true ? "He/she is Passed" : "He/She is failed")