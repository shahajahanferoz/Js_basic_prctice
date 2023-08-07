// Exercise 1: Grade Conversion
// Declare a variable to represent a numeric grade (e.g., 85).
// Use a switch statement to convert the numeric grade to a letter grade (A, B, C, etc.).
// Display the letter grade using console.log.

console.log("Exercise 1: Grade Conversion");
const mark = 95;
switch (true){
    case mark >= 90:
        console.log("your grade is A");
        break;
    case mark >= 70:
        console.log("your grade is B");
        break;
    default:
        console.log("your grade is C");
}


// Exercise 2: Language Greeting
// Declare a variable to represent a language code (e.g., "en" for English, "es" for Spanish).
// Use a switch statement to display a greeting message in the appropriate language based on the code.
// Include cases for different language codes and a default case for unknown codes.
// Display the greeting using console.log.

console.log("Exercise 2: Language Greeting");
const language = "en";
switch (language) {
    case "en":
        console.log("Good morning.");
        break;
    case "es":
        console.log("arigatugusaima.");
    default:
        console.log("suvho sokale sobaike.");
        break;
}



// Exercise 3: Day Type
// Declare a variable to represent a day of the week (e.g., 5 for Friday).
// Use a switch statement to determine whether the day is a weekday or a weekend day.
// Display a message indicating whether it's a weekday or a weekend day using console.log.

console.log("Exercise 3: Day Type");
switch (new Date().getDay()) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesd");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case  6:
      console.log("Saturday");
  }