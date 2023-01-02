// IMPORTANT VARIABLES
// IMPORTANT VARIABLES
// IMPORTANT VARIABLES



const numeric = document.querySelectorAll(".numeric");  // ALL NUMBERS
const operators = document.querySelectorAll(".operator");  // ALL OPERATORS
const screen = document.querySelector("#onscreen");  // SCREEN
const allButtons = document.querySelectorAll(".buttons button");  // ALL CALCULATOR BUTTONS
let currentDisplayValue = "";  // STORES DISPLAY VALUE
let currentNumber;  // CURRENT SCREEN NUMBER
let currentOperator;  // CURRENT SCREEN OPERATOR
let exampleProcess;  // EXAMPLE IN PROCESS
let example = []; // STORES VALUES FOR EXAMPLES
const zero = document.querySelector(".zero");  // ZERO BUTTON
const equal = document.querySelector(".equal");  // EQUAL BUTTON
const percentage = document.querySelector(".percentage");  // PERCENTAGE BUTTON
const backSpace = document.querySelector(".backspace"); //   BACKSPACE BUTTON
const decimal = document.querySelector(".dot");  // DECIMAL BUTTON



// NUMERICAL OPERATIONS
// NUMERICAL OPERATIONS
// NUMERICAL OPERATIONS



// ADD


function sum(num1, num2) {
    const sum = num1 + num2;
  
    return sum;
}
  
  
  // SUBTRACT
  
  
function minus(num1, num2) {
    const minus = num1 - num2;
  
    return minus;
}
  
  
  // MULTIPLY 
  
  
function multiply(num1, num2) {
    const multiply = num1 * num2;
  
    return multiply;
}
  
  
  // DIVIDE 
  
  
  function divide(num1, num2) {
    const divide = num1 / num2;
  
    return divide;
}