console.log("Hello World")

let age:number = 20;
let is_published: boolean = true;

let numbers:number[] = [10, 20, 55];

// tuple 
let  user: [number, string] = [1, 'feroz'];


// Customize dataType or enum 
const small = 1;
const medium = 2;
const large = 3;

const enum Size {Small = 1, Medium = 2, Large = 3}
let mySize: Size = Size.Medium;
console.log(mySize);

// Function 
function calculator(income: number): number{
    if (income < 50000)
        return income * 1.2
}