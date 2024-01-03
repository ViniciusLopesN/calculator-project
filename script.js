function add(a, b) {
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

function operate(operand, a, b) {

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
const display = document.getElementById('display');
const getButtons = document.querySelectorAll('.digit-button');
const numberButtons = Array.from(getButtons).sort((a,b) => a.textContent - b.textContent);
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const upperDisplay = document.getElementById('upper-display');

function clearContent() {
  inputedFirstNumber = '';
  inputedOperand = '';
  inputedSecondNumber = '';
  upperDisplay.textContent = '';
  display.textContent = '';
  operandButtons.forEach(button => button.classList.remove('active'));

}

clearButton.addEventListener('click', clearContent)

deleteButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0,-1);
  inputedFirstNumber = display.textContent;
})



for (const button of numberButtons) {
  button.addEventListener('click', (event) => {
    operandButtons.forEach(button => {
      if(button.classList.contains('active')) {
        display.textContent = '';
        button.classList.remove('active');
      }
    });
    populateDisplay(event);
  });
} 


function populateDisplay(event) {
  display.textContent += event.currentTarget.textContent;
}



const getOperandButtons = document.querySelectorAll('.operand-button')
const operandButtons = Array.from(getOperandButtons)

for (const button of operandButtons) {
  button.addEventListener('click', () => {
    if(display.textContent) {
      operandButtons.forEach(button => button.classList.remove('active'));
      button.classList.toggle('active');

      // if(inputedFirstNumber) {
      //   console.log('yes');
      //   operandButtons.forEach(button => button.classList.remove('active'));
      //   button.classList.toggle('active');
      //   evaluate();
      // }

      inputedOperand = button.textContent;
      inputedFirstNumber = display.textContent;
    }
  });
}

function evaluate() {
  inputedSecondNumber = display.textContent;
  upperDisplay.textContent = `${inputedFirstNumber} ${inputedOperand} ${inputedSecondNumber} = `
  display.textContent = operate(inputedOperand, inputedFirstNumber, inputedSecondNumber);
}

equalButton.addEventListener('click', evaluate);