// Exercise 1: Multiply by Two
// Write an arrow function named multiplyByTwo that takes a parameter num.
// Inside the arrow function, return the result of multiplying num by 2.
// Call the arrow function with different numeric values and display the results using console.log.

multiplyByTwo =(num)=> {
    return Math.pow(num, 2);
}
console.log(multiplyByTwo(10));


// Exercise 2: Check if Even
// Write an arrow function named isEven that takes a parameter number.
// Inside the arrow function, use a ternary operator to return true if the number is even (use the modulo operator %), and false otherwise.
// Call the arrow function with different numbers and display the results using console.log.

isEven =(num)=>{
    return num % 2 == 0 ? true : false;
}
console.log(isEven(9));


// Exercise 3: Convert to Uppercase
// Write an arrow function named convertToUppercase that takes a string parameter text.
// Inside the arrow function, use the toUpperCase() method to convert the text to uppercase.
// Return the converted text.
// Call the arrow function with different strings and display the results using console.log.

convertToUppercase =(string)=> {
    return string.toUpperCase();
}
console.log(convertToUppercase("This is feroz."));


// Exercise 4: Calculate Sum of Squares
// Write an arrow function named sumOfSquares that takes two parameters: num1 and num2.
// Inside the arrow function, calculate the sum of the squares of num1 and num2.
// Return the calculated value.
// Call the arrow function with different pairs of numbers and display the results using console.log.

sumOfSquares =(num1,num2)=> {
    num1 = Math.pow(num1, 2);
    num2 = Math.pow(num2, 2);
    
    return num1 + num2;
}
console.log(sumOfSquares(5, 4));


// Exercise 5: Filter Even Numbers
// Write an arrow function named filterEven that takes an array of numbers parameter.
// Inside the arrow function, use the filter() method to return a new array containing only the even numbers.
// Call the arrow function with different arrays of numbers and display the filtered arrays using console.log.

const numbers = [12,13,22,34,55,6,4,34,33]
filterEven =(arr)=> {
    const newArr = arr.filter(number => number % 2 == 0);
    return newArr;
}

console.log(filterEven(numbers));
