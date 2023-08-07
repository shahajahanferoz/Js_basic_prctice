let globalVar = 10;

const callGlobalVar =()=>{
    console.log(globalVar);
    let functionVar = 120;
    console.log(functionVar);
}
    // console.log(functionVar);
    
callGlobalVar();

const blockScope=()=>{
    if(globalVar){
        var x=25;
        let y=30;
        console.log(x,y);
    }
    console.log(x);
    // console.log(y);
}
// console.log(x);

// blockScope(); 


// VAR, LET, CONST
var a = 100;
let b = 200;
const c = 300;
const d = {
    name: "feroz",
    phone: "01234",
}

a = 110;
b = 210;
// c = 310;
d.name = "gscs";
d.mail = "abc@mail.com"

// console.log(d);

// Value vs. Reference
let value = 500;
let copyValue= value;
console.log(value);
console.log(copyValue);
value = 400;
console.log(value);
console.log(copyValue);


const number = [10,20,30,40,50];
const copyNumber = number;
console.log(number);
console.log(copyNumber);
copyNumber[1] = 100;
console.log(number);
console.log(copyNumber);


