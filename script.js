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



// A FUNCTION THAT COUNTS EXAPLES
// A FUNCTION THAT COUNTS EXAPLES
// A FUNCTION THAT COUNTS EXAPLES



function operate(num1, num2, operator) {
    if(operator === "divide") {
       const divided = divide(num1, num2);
       currentDisplayValue = divided;
  
  
       const roundNumber = Number(currentDisplayValue.toFixed(3));  // ROUND THE NUMBER WHEN NEEDED
       example.unshift(currentDisplayValue);
       screen.textContent = roundNumber;
       currentDisplayValue = "";
  
  
       if(num2 == 0) {  // IF USER TRIES TO DIVIDE BY 0
        screen.textContent = "";
        screen.textContent = "ERROR";
       }
  
  
       if(isNaN(num1) || isNaN(num2)) {
        screen.textContent = "ERROR";
       }
  
  
  
    } else if(operator === "multiply") {
       const multiplied = multiply(num1, num2);
       currentDisplayValue = multiplied;
  
  
       const roundNumber = Number(currentDisplayValue.toFixed(3));
       example.unshift(currentDisplayValue);
       screen.textContent = roundNumber;
       currentDisplayValue = "";
  
  
       if(isNaN(num1) || isNaN(num2)) {
        screen.textContent = "ERROR";
       }
    
  
    
    } else if(operator === "minus") {
        const minused = minus(num1, num2);
        currentDisplayValue = minused;
  
  
        const roundNumber = Number(currentDisplayValue.toFixed(3));
        example.unshift(currentDisplayValue);
        screen.textContent = roundNumber; 
        currentDisplayValue = "";
  
  
        if(isNaN(num1) || isNaN(num2)) {
            screen.textContent = "ERROR";
        }
    
  
    
    } else if(operator === "sum") {
        const summed = sum(num1, num2);
        currentDisplayValue = summed;
  
  
        const roundNumber = Number(currentDisplayValue.toFixed(3));
        example.unshift(currentDisplayValue);
        screen.textContent = roundNumber;
        currentDisplayValue = "";
  
  
        if(isNaN(num1) || isNaN(num2)) {
            screen.textContent = "ERROR";
        }
    }
}



// IF USER CLICKS A NUMBER BUTTON
// IF USER CLICKS A NUMBER BUTTON
// IF USER CLICKS A NUMBER BUTTON



numeric.forEach(button => button.addEventListener("click", function() {
    currentDisplayValue += button.value;
    screen.textContent = currentDisplayValue;
  
  
    if(screen.textContent == "00") {  // PREVENTS THE USER FROM TYPING MULTIPLE ZEROS WHEN DISPLAY IS CLEAR
        screen.textContent = 0;
        currentDisplayValue = "";
    }
  
  
    const screenCount = screen.textContent.split("");
  
  
    if(screenCount.length > 10) {  // PREVENTS THE NUMBERS FROM OVERFLOWING THE SCREEN
        removeNumber();
        percentage.removeEventListener("click", countPercent);
    } else {
        percentage.addEventListener("click", countPercent);
    }
}));
  
  