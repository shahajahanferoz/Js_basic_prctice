// Store the letters as an array in a constant
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// const name = "feroz"

// let newArray = Array.from(name);
// // console.log(newArray);

// let afterChange = ""
// for (let i = 0; i < newArray.length; i++) {
//     const result = newArray[i].charCodeAt(0);
//     const character = String.fromCharCode(result+1);
//     // console.log(result);
//     if(newArray[i] === 'z'){
//         afterChange += 'a'
//     }
//     else
//         afterChange += (character)
// }
// // console.log(afterChange);



///////////////................................


let newString = "";




const userInput = "gh";

for (let i = 0; i < userInput.length; i++) {


    let indexNum = alphabet.indexOf(userInput[i]);
    
    if(alphabet[indexNum] == 'z'){
    newString += 'a'
    }
    else{
        newString +=  (alphabet[indexNum + 1])
    }

}
console.log(newString);



///////////////////

const strings = "abcdefghijklmnopqrstuvwxyz";

let ranstr = "abcxyz";
let strSplit = ""

for (let i = 0; i < ranstr.length; i++) {
  let findStrIndx = strings.indexOf(ranstr[i]);
  if (findStrIndx === 25) {
    strSplit += strings[0];
  } else {
    strSplit += strings[findStrIndx + 1];
  }
  //   for (let j = 0; j < strings.length; j++) {
  //     if (ranstr[i].toString() == "z") {
  //         console.log(strings[0]);
  //         break;
  //     }
  //     else if (ranstr[i].toString() == strings[j].toString()) {
  //       console.log(strings[j + 1]);
  //       break;
  //     }
  //   }
}

console.log("rand ", strSplit);