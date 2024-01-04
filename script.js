function add(a, b) {  //Functions for Operations
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a)/Number(b);
}

let inputedFirstNumber;
let inputedSecondNumber;
let inputedOperand;

function operate(operand, a, b) { //Function to call operations

  switch (operand) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case 'x':
      return multiply(a, b);

    case '÷':
      return divide(a, b);
    
    default:
      break;
  }
}

//Variable Calls
const display = document.getElementById('display');
const getButtons = document.querySelectorAll('.digit-button');
const numberButtons = Array.from(getButtons).sort((a,b) => a.textContent - b.textContent);
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const upperDisplay = document.getElementById('upper-display');
const dotButton = document.getElementById('dot');

function clearContent() {
  inputedFirstNumber = '';
  inputedOperand = '';
  inputedSecondNumber = '';
  upperDisplay.textContent = '';
  display.textContent = '';
  operandButtons.forEach(button => button.classList.remove('active'));
  dotButton.disabled = false;
}

function operandToggle(event) {
  operandButtons.forEach(button => button.classList.remove('active'));
  event.currentTarget.classList.toggle('active');
}


clearButton.addEventListener('click', clearContent)

deleteButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0,-1);
  if (operandButtons.forEach(button => button.classList.contains('active'))) {
  inputedFirstNumber = display.textContent;
  }
})



for (const button of numberButtons) { // Create button functionality for numbers and period (.)
  button.addEventListener('click', (event) => {
    operandButtons.forEach(button => {
      if(button.classList.contains('active')) {
        display.textContent = '';
        dotButton.disabled = false;
        button.classList.remove('active');
      }
    });
    populateDisplay(event);
  });
} 

dotButton.addEventListener('click', () => dotButton.disabled = true)

function populateDisplay(event) {
  if(!inputedFirstNumber && !inputedSecondNumber && inputedOperand) {
    display.textContent = '';
    inputedOperand = '';
  }
  display.textContent += event.currentTarget.textContent;
}



const getOperandButtons = document.querySelectorAll('.operand-button')
const operandButtons = Array.from(getOperandButtons)

for (const button of operandButtons) {
  button.addEventListener('click', (event) => {
    if(display.textContent) {
      operandToggle(event);
      if(inputedFirstNumber) {
        operandToggle(event);
        evaluate();
        inputedFirstNumber = display.textContent;
        inputedOperand = button.textContent;
        return;
      }

      inputedOperand = button.textContent;
      inputedFirstNumber = display.textContent;
    }
  });
}

function evaluate() {
  inputedSecondNumber = display.textContent;
  upperDisplay.textContent = `${inputedFirstNumber} ${inputedOperand} ${inputedSecondNumber} = `
  display.textContent = parseFloat(operate(inputedOperand, inputedFirstNumber, inputedSecondNumber).toFixed(2));
  inputedFirstNumber = '';
  inputedSecondNumber = '';
  dotButton.disabled = false;
}

equalButton.addEventListener('click', () => {
  if (inputedFirstNumber && inputedOperand) {
    evaluate();
  }
});