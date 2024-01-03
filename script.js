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

let firstNumber;
let secondNumber;
let operand; // used inside functio, check later.

function operate(operand, a, b) {
  
  switch (operand) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '*':
      return multiply(a, b);

    case '/':
      return divide(a, b);
    
    default:
      break;
  }
}

