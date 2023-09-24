"use strict";
console.log("Hello World");
let age = 20;
let is_published = true;
let numbers = [10, 20, 55];
let user = [1, 'feroz'];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculator(income, taxYear = 2022) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.4;
}
calculator(500000, 2021);
let employee = {
    id: 1,
    name: 'sh Feroz',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("Hola!!!");
}
greet(undefined);
