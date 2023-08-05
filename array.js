// Exercise 1: Sum of Array Elements
// Create an array of numbers.
// Write a loop to calculate and display the sum of all the elements in the array.

let sum=0;
const numbers = [10, 20, 30,10,20,30];
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log("Sum of array",sum);


// Exercise 2: Average of Array Elements
// Create an array of numbers.
// Calculate the average (mean) of all the elements in the array.
// Display the average using console.log.

console.log("Average of array ",sum/numbers.length);


// Exercise 3: Largest Number in Array
// Create an array of numbers.
// Find and display the largest number in the array.

let largest = numbers[0];
for(let i = 1; i<numbers.length; i++){
    if(largest < numbers[i]){
        largest = numbers[i]
    }
}
console.log("The Largest number of ",largest);



// Exercise 4: Remove Duplicates
// Create an array with duplicate values.
// Write a function that removes duplicates from the array and returns a new array with unique values.

const removeDuplicates =()=>{
    const newArray = [];
    for(let i=0; i<numbers.length;i++){
        for(let j=0; )
    }
}

removeDuplicates(numbers);


// Exercise 5: Find Index of Element
// Create an array of strings.
// Write a function that takes a string parameter and returns the index of that string in the array. If not found, return -1.

// Exercise 6: Array Reversal
// Create an array of elements.
// Write a function that reverses the order of the elements in the array and returns the reversed array.

// Exercise 7: Filter Even Numbers
// Create an array of numbers.
// Write a function that filters out and returns a new array containing only the even numbers from the original array.

// Exercise 8: Array Concatenation
// Create two arrays of elements.
// Write a function that concatenates the two arrays and returns a new combined array.

// Exercise 9: Array Mapping
// Create an array of numbers.
// Write a function that maps over the array and returns a new array containing the square of each number.

// Exercise 10: Array Sorting
// Create an array of strings.
// Write a function that sorts the array in alphabetical order and returns the sorted array.
