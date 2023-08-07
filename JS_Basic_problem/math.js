// Exercise 1: Arithmetic Operations
// Declare two variables with numeric values.
// Use addition, subtraction, multiplication, and division operators to perform these operations on the variables.
// Display the results using console.log.

let num1 = 100;
let num2 = 25;
let res = num1 + num2;
console.log(res);


// Exercise 2: Modulus and Exponentiation
// Declare a variable with a number.
// Use the modulus operator to find the remainder when dividing the number by 3.
// Use the exponentiation operator to calculate the square of the number.
// Display the results using console.log.

console.log("Exercise 2:");
let num3 = 100;
let remainder = num3 % 3;
let squareNumber = Math.pow(num3,2)
console.log(remainder,squareNumber);


// Exercise 3: Increment and Decrement
// Declare a variable with an initial value.
// Use both the pre-increment and post-increment operators to increase the value by 1.
// Use both the pre-decrement and post-decrement operators to decrease the value by 1.
// Display the results using console.log.

console.log("Exercise 3");
let num4 = 10;
console.log("post incre",num4++);
console.log("pre incre",++num4);
console.log("post decre",num4--);
console.log("pre decre",--num4);

// Exercise 4: Compound Assignment Operators
// Declare a variable with an initial value.
// Use compound assignment operators (+=, -=, *=, /=) to modify the value of the variable.
// Display the modified value using console.log.

console.log("Exercise 4:");
let num5 = 15;
console.log("using +=", num5 += 5);
console.log("using -=", num5 -= 5);
console.log("using *=", num5 *= 5);
console.log("using /=", num5 /= 5);



// Exercise 5: Order of Operations
// Declare variables with numeric values.
// Perform a series of arithmetic operations involving addition, multiplication, and parentheses to create a complex expression.
// Display the result of the expression using console.log.

console.log("Excercise 5:");;
let num6 = 12;
console.log(num6*3/2+(num6 + 2 - 10));


// Exercise 6: Math Functions
// Declare a variable with a numeric value.
// Use the Math.sqrt function to calculate the square root of the value.
// Use the Math.round, Math.floor, and Math.ceil functions to round the value to different precision levels.
// Display the results using console.log.

console.log('Excercise 6: ');
let num7 = 10;
let result = Math.sqrt(num7);
console.log(result, "Math round:", Math.round(result), " Math floor:", Math.floor(result), " Math ceil:", Math.ceil(result));


// Exercise 7: Random Number Generation
// Use the Math.random function to generate a random decimal number between 0 and 1.
// Convert the random decimal number to a random integer within a specific range using appropriate arithmetic.
// Display the random decimal and integer numbers using console.log.

let randomNumber = Math.random(); 
let randomNumberDecimal = Math.round(randomNumber); 
let randomNumber2 = Math.round(10* Math.random()); 
console.log(randomNumber);