// Exercise 1: Creating an Object
// Create an object representing a person with properties such as name, age, and occupation.
// Display the properties using console.log.

console.log("Exercise 1: Creating an Object");
const person = {
    name: "feroz",
    age: "27",
    occupation: "Student",
}
console.log(person.name);


// Exercise 2: Accessing Object Properties
// Create an object representing a book with properties like title, author, and year.
// Write a function that takes the book object as a parameter and displays its properties using console.log.

console.log("Exercise 2: Accessing Object Properties");
const book = {
    title: "himur ratri",
    author: "Humayon Ahmed",
    year: 2014,
}
showBook = (book) => {
    console.log("Book Title: "+ book.title);
    console.log("Book Author: "+ book.author);
    console.log("Book published Year: "+ book.year);
}
showBook(book);



// Exercise 3: Adding and Modifying Properties
// Create an empty object.
// Use dot notation or bracket notation to add properties like name, age, and email.
// Modify the name property to a new value and display the updated object using console.log.

console.log("Exercise 3: Adding and Modifying Properties");
const obj1 = {};
obj1.name = "shahajahan feroz";
obj1.age = 27;
obj1.email = "abc@gmail.com";
console.log(obj1.name, "   ", obj1.email);


// Exercise 4: Nested Objects
// Create an object representing a student with properties like name, age, and grades (an array of numbers).
// Display the student's information using console.log.

console.log("Exercise 4: Nested Objects");
const student1 = {
    name: "Rofiq",
    age: 20,
    grade: [50, 60, 80],
}
console.log(student1);



// Exercise 5: Deleting Object Properties
// Create an object with several properties.
// Write a function that takes the object and a property name as parameters and deletes the specified property.
// Display the object before and after the property deletion using console.log.

console.log("Exercise 5: Deleting Object Properties");
const student2 = {
    name: "Abdul gani",
    class: 9,
    shift: "2nd",
    address: "uttara, dhaka",
}
console.log(student2);

deleteObjProperty =(obj, objProperty)=> {
    delete obj[`${objProperty}`];
}
deleteObjProperty(student2,'class');
console.log(student2);


// Exercise 6: Object Cloning
// Create an object with properties.
// Write a function that creates a copy of the object using the Object.assign() method or the spread operator ({...}).
// Display the original and cloned objects using console.log.

console.log("Create an object with properties.");
const car = {
    name: "corolla",
    brand: "Toyota",
    version: 2019,
}
let copyObject = {};
let copyObject2 = {};
let copyObject3 = {};
copyObj =(obj)=> {
    copyObject = Object.assign({},obj);
    Object.assign(copyObject2, obj)
    copyObject3 = {...obj}
}

copyObj(car);
console.log("Original " , car);
console.log("Copied", copyObject);
console.log("Copied",copyObject2);
console.log("Copied",copyObject3);


// Exercise 7: Array of Objects
// Create an array of objects, each representing a person with properties like name, age, and location.
// Write a function that iterates through the array and displays information for each person using console.log.

console.log("Exercise 7: Array of Objects");
let persons = [    
    {
        "name": "robi",
        "age": 22,
        "location": "dhaka"
    },
    {
        "name": "kobi",
        "age": 21,
        "location": "dhaka"
    },
    {
        "name": "nobi",
        "age": 20,
        "location": "dhaka"
    },
];

showAllPerson =(persons)=> {
    for (let i of persons){
        console.log(i.name, i.age, i.location);
    }
}
showAllPerson(persons)


// Exercise 8: Object Destructuring
// Create an object with properties like name, age, and country.
// Use object destructuring to extract and display these properties using console.log.

console.log("Exercise 8: Object Destructuring");
const person11 = {
    name: "jamal hossain",
    age: 44,
    country: "BD",
}
const {name, age, country} = person11;
console.log("Object destructing: ",name, age , country);

// Exercise 9: Object Methods
// Create an object with various properties and values.
// Write a function that iterates over the object using a for...in loop and displays each property and its value using console.log.

console.log("Exercise 9: Object Methods");

const object1 = {
    name: 'jamshed',
    age: 33,
    address: "uttara, dhaka",
}
showPropertiesByForin =(obj)=> {
    for (const key in obj) {
            console.log(`${key}: ${obj[key]}`);
    }
}

showPropertiesByForin(object1)