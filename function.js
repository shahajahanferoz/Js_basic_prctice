// Exercise 1: Calculate Area of a Rectangle
// Create a function called calculateRectangleArea that takes two parameters: width and height.
// Inside the function, calculate and return the area of the rectangle (area = width * height).
// Call the function with different values for width and height and display the results using console.log.

calculateRectangleArea =(width, length)=> {
    return length*width;
}
console.log("The area of rectangle is ",calculateRectangleArea(5,4));


// Exercise 2: Greeting Function
// Create a function called greetUser that takes a parameter name.
// Inside the function, construct and return a greeting message that includes the provided name.
// Call the function with different names and display the greetings using console.log.

console.log("Exercise 2: Greeting Function");
greetUser =(name)=> {
    console.log("Hello " + name + " a very Good afternoon to you.");
}

greetUser("Rahul");

// Exercise 3: Even or Odd
// Create a function called isEven that takes a parameter number.
// Inside the function, determine if the number is even or odd by checking if the remainder when divided by 2 is 0.
// Return true if the number is even, and false if it's odd.
// Call the function with different numbers and display the results using console.log.

console.log("Exercise 3: Even or Odd");
isEven =(number)=> {
    if(number % 2 == 0){
        return true;
    }
    else
        return false
}
console.log(isEven(13));

// Exercise 4: BMI Calculator
// Create a function called calculateBMI that takes two parameters: weight (in kilograms) and height (in meters).
// Inside the function, calculate and return the BMI (BMI = weight / (height * height)).
// Call the function with different values for weight and height and display the calculated BMI using console.log.

console.log("Exercise 4: BMI Calculator");
calculateBMI =(weight, height)=> {
    const BMI = weight / (height * height);
    return BMI;
}
console.log(calculateBMI(65, 1.7));


// Exercise 5: Temperature Converter
// Create a function called convertCelsiusToFahrenheit that takes a parameter celsius.
// Inside the function, calculate and return the temperature in Fahrenheit (F = C * 9/5 + 32).
// Call the function with different Celsius values and display the converted Fahrenheit temperatures using console.log.

console.log("Exercise 5: Temperature Converter");
convertCelsiusToFahrenheit =(C)=> {
    const F = C * 9/5 + 32;
    return F;
}
console.log(convertCelsiusToFahrenheit(41));