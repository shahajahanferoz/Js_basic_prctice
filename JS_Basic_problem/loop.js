// Exercise 1: while Loop
// Declare a variable with an initial value (e.g., 1).
// Use a while loop to print the values of the variable from the initial value up to a certain limit (e.g., 10).
// Increment the variable within the loop.
// Display the values using console.log.


let number1 = 15;
while (number1 < 20) {
    console.log(number1);
    number1++;
}

// Exercise 2: for Loop
// Use a for loop to iterate through the numbers from 1 to 5.
// Display each number using console.log.

for (let i = 1; i < 6; i++) {
    console.log(i);;
    
}


// Exercise 3: Looping through an Array
// Declare an array of strings with multiple items.
// Use a for loop to iterate through the array and display each item using console.log.

const names = ["feroz", "ahsan", "rafi"]
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
    
}


// Exercise 4: Sum of Numbers
// Use a while loop to calculate the sum of numbers from 1 to 10.
// Display the final sum using console.log.

let number = 1
let sum = 0
while (number < 11) {
    sum = sum + number;
    number ++;
}
console.log(`Sum of 1 to 10 is ${sum}`);


// Exercise 5: Odd Numbers
// Use a for loop to display all odd numbers between 1 and 20.
// Hint: You can use the modulo operator (%) to check if a number is odd.

console.log("All odd number between 1 to 20");
for (let i = 1; i < 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
    
}


// Exercise 6: Nested Loop
// Use nested for loops to create a pattern of asterisks. Start with a single asterisk and increase the number of asterisks in each row.
// Display the pattern using console.log.

let stars = "";
for (let i = 1; i < 6; i++) {
    for(j=0; j < i; j++){
        stars = stars + "*";
    } 
    stars += "\n"   
}
console.log(stars);

// Exercise 7: Infinite Loop Prevention
// Use a while loop to simulate a user input scenario. Continuously prompt the user for input until they provide a specific keyword (e.g., "exit" or "quit").
// Use a conditional statement to break out of the loop when the user provides the keyword.

const prompt = require('prompt-sync')();

let takeOpinion = "";
while(takeOpinion != "exit"){
 takeOpinion = prompt("Please give your opinion: ");
} 
