// Exercise 1: Basic Comparisons
// Declare two variables with numeric values.
// Use the equality (==) and inequality (!=) operators to compare the values.
// Use the strict equality (===) and strict inequality (!==) operators to compare the values.
// Display the results of each comparison using console.log.

const num1 = 10;
const num2 = '10';
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 === num2);
console.log(num1 !== num2);


// Exercise 2: String Comparisons
// Declare two variables with string values.
// Use the equality and inequality operators to compare the string values.
// Use the comparison operators (<, >, <=, >=) to compare the lengths of the strings.
// Display the results of each comparison using console.log.

console.log("Exercise 2: String Comparisons");
const str1 = 'string 1';
const str2 = 'string 1';
console.log(str1.length == str2.length);
console.log(str1.length < str2.length);
console.log(str1.length > str2.length);
console.log(str1.length <= str2.length);
console.log(str1.length >= str2.length);



// Exercise 3: Logical Operators
// Declare three variables with boolean values.
// Use the logical AND (&&) and logical OR (||) operators to combine the boolean values in different ways.
// Use the logical NOT (!) operator to negate the boolean value of one of the variables.
// Display the results of each combination using console.log.

console.log("Exercise 3: Logical Operators");
const higher = true;
const lower = false;
const result = true;
console.log(higher && lower && result);
console.log(higher && !lower && result);
console.log(higher || lower || result);
console.log(higher && lower || result);
console.log(!lower);
console.log(!higher);


// Exercise 4: Complex Comparisons
// Declare variables with numeric values.
// Create complex comparison expressions involving arithmetic operations and comparison operators.
// Use parentheses to control the order of operations in the expressions.
// Display the results of each expression using console.log.

console.log("Exercise 4: Complex Comparisons");
const number1 = 20;
const number2 = 40;
const result2 = (20 + 20 - 40) * 2 + 5 == 10-5;
console.log(result2);



// Exercise 5: Comparing Different Types
// Declare variables with different data types, such as a number and a string.
// Use equality and inequality operators to compare these variables.
// Observe how JavaScript handles type coercion when comparing different types.
// Display the results of each comparison using console.log.

console.log("Exercise 5: Comparing Different Types");
const numb1 = 15;
let stri1 = '15';
console.log(numb1 === stri1);
console.log(numb1 !== stri1);
console.log(numb1 === Number(stri1));
console.log(numb1 !== Number(stri1));


// Exercise 6: Conditional Statements
// Declare a variable with a numeric value.
// Use an if statement to check if the value is greater than a certain threshold.
// If the condition is met, display a message indicating the value is above the threshold. Otherwise, display a different message.

console.log("Exercise 6: Conditional Statements");
const threshold = .05
const age = 2;
if(age > threshold){
    console.log("the value is above the threshold");
}
else
    console.log("the value is below the threshold");


// Exercise 7: Comparing Arrays
// Declare two arrays with different values.
// Use the equality operator to compare the arrays directly.
// Notice how JavaScript compares arrays by their reference.
// Compare the individual elements of the arrays using loops or other methods.
// Display the results of the comparisons using console.log.

console.log("Exercise 7: Comparing Arrays");
const array1 = [10,20,30,40,50];
const array11 = [10,20,30,40,50];
const array2 = [60,70,80,90,100];

console.log(array1 == array11);
console.log(JSON.stringify(array1) === JSON.stringify(array11));

function equalsCheck(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        let result = false;
        for (let i = 0; i < arr1.length; i++) {

            if (arr1[i] !== arr2[i]) {
                return false;
            } else {
                result = true;
            }
        }
        return result;
    }
}

console.log(equalsCheck(array1, array2));

