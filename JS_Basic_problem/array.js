// Exercise 1: Sum of Array Elements
// Create an array of numbers.
// Write a loop to calculate and display the sum of all the elements in the array.

let sum=0;
const numbers = [10, 20, 30,10,20,30,5,15,40];
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}

console.log('numbers', numbers)

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
    for(let i=0; i<numbers.length; i++){
        if(!newArray.includes(numbers[i])){
            newArray.push(numbers[i])
        }
    }
    return newArray;
}

const example1 = removeDuplicates(numbers);
console.log(example1);


// Exercise 5: Find Index of Element
// Create an array of strings.
// Write a function that takes a string parameter and returns the index of that string in the array. If not found, return -1.

const names = ['shahajahan', 'feroz', 'rahim', 'karim', 'feroz', 'rabbi'];


let userInput = prompt("please give any string ");
function finIndexNumber(arr, userInput){
    let indexPosition = arr.indexOf(userInput);
    
    return indexPosition;
}

const ex1 = finIndexNumber(names, userInput);
console.log(ex1);


// Exercise 6: Array Reversal
// Create an array of elements.
// Write a function that reverses the order of the elements in the array and returns the reversed array.

console.log('Exercise 6: Array Reversal');
const book = ['bangla', 'english','math','science']
function arrayReversal(names){
    const newArr = [];
    let j = 0;
    for (let i = names.length-1; i >= 0 ; i--) {
        newArr[j] = names[i];
        j += 1;
    }

    return newArr;
}

const ex2 = arrayReversal(names);
console.log("Original array is: ", names);
console.log("The Reversal array: ",ex2);


// Exercise 7: Filter Even Numbers
// Create an array of numbers.
// Write a function that filters out and returns a new array containing only the even numbers from the original array.

const numbers2 = [3,4,5,6,7,8,9,1,11,12,13,16];

function findEvenNumber(numbers){
    const newArr = [];
    for (let i = numbers.length-1; i >= 0 ; i--) {
        if(numbers[i] % 2 == 0){
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}

const ex3 = findEvenNumber(numbers2);
console.log('Even Numbers of array',ex3);

// Exercise 8: Array Concatenation
// Create two arrays of elements.
// Write a function that concatenates the two arrays and returns a new combined array.

function combainArray (arr1, arr2){
    const newArray = arr1.concat(arr2);
    return newArray
}
const ex4 = combainArray(numbers2, ex3);
console.log(ex4);


// Exercise 9: Array Mapping
// Create an array of numbers.
// Write a function that maps over the array and returns a new array containing the square of each number.

arrayMapping = (arr) => {
    const newArray = arr.map(x => x * x )
    return newArray;
}
const ex5 = arrayMapping(numbers2);
console.log(ex5);


// Exercise 10: Array Sorting
// Create an array of strings.
// Write a function that sorts the array in alphabetical order and returns the sorted array.

const fruits = ['banana', 'apple', 'guava', 'mango'];
const sortedFruit = fruits.sort();
console.log(sortedFruit);

