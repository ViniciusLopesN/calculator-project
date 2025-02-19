let inputedFirstNumber;
let inputedSecondNumber;
let inputedOperand;

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);

function operate(operand, a, b) { //Function to call operations

  switch (operand) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '×':
      return multiply(a, b);

    case '÷':
      return divide(a, b);
    
    default:
      break;
  }
}

const display = document.getElementById('display');
const upperDisplay = document.getElementById('upper-display');



const clearButton = document.getElementById('clear'); // Clear display
clearButton.addEventListener('click', clearContent)

function clearContent() {
  inputedFirstNumber = '';
  inputedOperand = '';
  inputedSecondNumber = '';
  upperDisplay.textContent = '';
  display.textContent = '';
  operandButtons.forEach(button => button.classList.remove('active'));
  dotButton.disabled = false;
}




const deleteButton = document.getElementById('delete'); // Delete Character
deleteButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0,-1);
})


const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', () => dotButton.disabled = true);

const getButtons = document.querySelectorAll('.digit-button');
const numberButtons = Array.from(getButtons).sort((a,b) => a.textContent - b.textContent);

for (const button of numberButtons) { // Create button functionality for numbers and period (.)
  button.addEventListener('click', (event) => {
    operandButtons.forEach(button => {
      if(button.classList.contains('active')) {
        display.textContent = '';
        dotButton.disabled = false;
        button.classList.remove('active')
      }
    });
    populateDisplay(event);
  });
} 


function populateDisplay(event) {
  if(!inputedFirstNumber && !inputedSecondNumber && inputedOperand) {
    display.textContent = '';
    inputedOperand = '';
  }
  display.textContent += event.currentTarget.textContent;
}

function operandIsActive() {
  let isActive = false;
  operandButtons.forEach(button => {
    if(button.classList.contains('active')) {
      return isActive = true;
    }
  });
  return isActive;
}

function operandToggle(event) {
  operandButtons.forEach(button => button.classList.remove('active'));
  event.currentTarget.classList.toggle('active');
  inputedOperand = event.currentTarget.textContent;
}

const getOperandButtons = document.querySelectorAll('.operand-button')
const operandButtons = Array.from(getOperandButtons)

for (const button of operandButtons) {
  button.addEventListener('click', (event) => {
    if(inputedFirstNumber && display.textContent){
      evaluate();
    }
    if(display.textContent || operandIsActive()) {
      operandToggle(event);
      
      if(display.textContent) {
        inputedFirstNumber = display.textContent;
      }

      display.textContent = '';
      upperDisplay.textContent = `${inputedFirstNumber} ${inputedOperand}`
      }
    });

  }


const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
  if (inputedFirstNumber && inputedOperand) {
    evaluate();
  }
});


function evaluate() {
  let upperDisplaySplit = upperDisplay.textContent.split(' ');
  inputedFirstNumber = upperDisplaySplit[0];
  inputedOperand = upperDisplaySplit[1];
  inputedSecondNumber = display.textContent;

  upperDisplay.textContent = `${inputedFirstNumber} ${inputedOperand} ${inputedSecondNumber} = `

  display.textContent = parseFloat(operate(inputedOperand, inputedFirstNumber, inputedSecondNumber).toFixed(2));

  inputedFirstNumber = '';
  inputedSecondNumber = '';
  dotButton.disabled = false;
}


