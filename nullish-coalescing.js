// Exercise 1: Handling User Input
// Use the prompt function to ask the user for their name.
// Assign the user's input to a variable.
// Use the nullish coalescing operator to provide a default name (e.g., "Guest") if the user didn't input anything.
// Display a message using console.log that addresses the user by their name or the default name.

const prompt = require('prompt-sync')();
let name = null;
let takeName = prompt("Please give your opinion: ");

name = takeName ?? "Guest";
console.log("this is ",name );


// Exercise 2: Default Values for Configuration
// Create an object representing some configuration settings.
// Access a property that may or may not be defined in the object.
// Use the nullish coalescing operator to provide a default value if the property is null or undefined.
// Display the resulting value using console.log.

const person = {
    name: "feroz",
    age: "20",
    mobile: null,
    pen: ''
}
console.log(person.mail ?? 'abc@mail');
console.log(person.mobile ?? '0123');
console.log(person.pen ?? 'yes');


// Exercise 3: Handling Numbers
// Declare a variable that may hold a number or be null or undefined.
// Use the nullish coalescing operator to provide a default number (e.g., 0) if the variable is null or undefined.
// Perform some arithmetic operation using the resulting value.
// Display the result of the operation using console.log.


let number;
let anyNumber = number ?? 109 * Math.random();
console.log(anyNumber);
