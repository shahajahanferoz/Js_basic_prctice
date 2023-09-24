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
function calculator(income: number, taxYear:number = 2022): number{
    if (taxYear < 2020)
        return income * 1.2;
    return income *1.4;
}

calculator(500000, 2021);


// Object 
// type alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee:Employee = {
    id:1 ,
    name: 'sh Feroz',
    retire: (date: Date) =>{
        console.log(date);
        
    }
}

// union type
function kgToLbs(weight: number | string): number {
    // narrowing
    if(typeof weight == 'number')
        return weight*2.2
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10kg');


// intersection type
type Draggable = {      // this is a alias type
    drag: () => void
};

type Resizable = {             // this is another alias type
    resize: () => void
};

type UIWidget = Draggable & Resizable      //this is intersection type

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}

// Literal Type. Literal=(exact, specific)

type Quantity = 50 | 100;       // this is alias type
// let quantity: number;
// let quantity: 50 | 100 = 50 ;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inc'


// nullable & undefined
function greet(name: string | null | undefined): void{
    if(name)
        console.log(name.toUpperCase);
    else
        console.log("Hola!!!");
        
    
}
greet(undefined)