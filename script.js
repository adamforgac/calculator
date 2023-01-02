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



// IF USER CLICKS A OPERATOR BUTTON
// IF USER CLICKS A OPERATOR BUTTON
// IF USER CLICKS A OPERATOR BUTTON



operators.forEach(operator => operator.addEventListener("click", function() {
    currentOperator = operator.value;
    currentNumber = screen.textContent;
    example.push(currentNumber);
    example.push(currentOperator);
  
  
    if(currentNumber == "") {
        currentNumber = 0;
    }
  
  
    currentDisplayValue = "";
  
  
    if(example.length === 4) {
        exampleProcess = example.slice(0, 3);
        example.splice(0, 3);
        callOperate();
    }
}));
  
  function callOperate() {
    const num1 = Number(exampleProcess[0]);
    const operator = exampleProcess[1];
    const num2 = Number(exampleProcess[2]);
  
  
    operate(num1, num2, operator);
    
  
    const screenCount = screen.textContent.split("");
  
  
    if(screenCount.length > 10) {
        clearCalc();
        alert("Too many numbers");
    }
}
  
  
  
  equal.addEventListener("click", function() {
    const number1 = Number(example[0]);
    const sign = example[1];
    const number2 = Number(screen.textContent);
  
  
    operate(number1, number2, sign);
    example.splice(0, 3);
  
  
    const screenCount = screen.textContent.split("");
  
    
    if(screenCount.length > 10) {
        clearCalc();
        alert("Too many numbers");
    }
});



// BACKSPACE BUTTON FUNCTION
// BACKSPACE BUTTON FUNCTION
// BACKSPACE BUTTON FUNCTION



backSpace.addEventListener("click", removeNumber);


function removeNumber() {
  const screenCount = screen.textContent.split("");
  screenCount.splice(screenCount.length - 1, screenCount.length);
  screen.textContent = "";


  for(let i = 0; i <= screenCount.length - 1; i++) {
      screen.textContent += screenCount[i];
  }


  currentDisplayValue = screen.textContent;


  if(screen.textContent === "ERRO") {  // PREVENTS THE USER FROM REMOVING ERROR FROM THE DISPLAY BY CLICKING BACKSPACE
      screen.textContent = "ERROR";
  }


  if(screen.textContent == "") {  // WHEN THE USER REMOVES EVERY NUMBER, THE DISPLAY IS NOT EMPTY
      screen.textContent = 0;
  } 


  if(screenCount.length > 10) {
      removeNumber();
      percentage.removeEventListener("click", countPercent);
  } else {
      percentage.addEventListener("click", countPercent);
  }
}



// PERCENTAGE BUTTON FUNCTION
// PERCENTAGE BUTTON FUNCTION
// PERCENTAGE BUTTON FUNCTION



percentage.addEventListener("click", countPercent);


function countPercent() {
  const result = Number(screen.textContent) / 100;
  const resultNum = result;


  if(screen.textContent === "ERROR") {
      resultNum = "ERROR";
  }


  screen.textContent = resultNum;


  const screenCount = screen.textContent.split("");

  if(screenCount.length > 10) {
      removeNumber();
  }
}



// DECIMAL BUTTON FUNCTION
// DECIMAL BUTTON FUNCTION
// DECIMAL BUTTON FUNCTION



let separatedScreen;
const decimalValue = decimal.value;


decimal.addEventListener("click", checkDecimal);


function checkDecimal() {
  separatedScreen = screen.textContent.split("");


  if(separatedScreen.includes(".")) {
      false;
  } else {
      addDecimal();
  }
}



function addDecimal() {
  screen.textContent += decimalValue;
  currentDisplayValue = screen.textContent;
}







  
  