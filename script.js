// buttons
const acButton = document.getElementById("acButton");
const negateButton = document.getElementById("negateButton");
const percentageButton = document.getElementById("percentageButton");
const divideButton = document.getElementById("divideButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const multiplyButton = document.getElementById("multiplyButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const subtractButton = document.getElementById("subtractButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const addButton = document.getElementById("addButton");
const zeroButton = document.getElementById("zeroButton");
const dotButton = document.getElementById("dotButton");
const equalsButton = document.getElementById("equalsButton");

const result = document.getElementById("result");

//operations
function add(no1, no2) {
    return no1 + no2;
}

function subtract(no1, no2) {
    return no1 - no2;
}

function multiply(no1, no2) {
    return no1 * no2;
}

function divide(no1, no2) {
    return no1 / no2;
}

function negate(no) {
    return no1 * -1;
}

function percentage(no) {
    return no / 100;
}

function operate(operator, operand1, operand2) {
    if (operator === "+") {
        return add(operand1, operand2);
    }
    else if (operator === "-") {
        return subtract(operand1, operand2);
    }
    else if (operator === "*") {
        return multiply(operand1, operand2);
    }
    else if (operator === "/") {
        return divide(operand1, operand2);
    }
    else if (operator === "+/-") {
        return negate(operand1);
    }
    else if (operator === "%") {
        return percentage(operand1);
    }
}

let firstNumber = null;
let secondNumber = null;
let operator = null;

acButton.addEventListener("click", function () {
    result.textContent = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
});

negateButton.addEventListener("click", function () {
    result.textContent = - Number(result.textContent);
    firstNumber = - firstNumber;
});

percentageButton.addEventListener("click", function () {
    result.textContent = (Number(result.textContent))/100;
});

divideButton.addEventListener("click", function () {
    operator = "/";

});

sevenButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 7;
    }
    else {
        secondNumber = 7;
    }
    result.textContent = "7";
});

eightButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 8;
    }
    else {
        secondNumber = 8;
    }
    result.textContent = "8";
});

nineButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 9;
    }
    else {
        secondNumber = 9;
    }
    result.textContent = "9";
});

multiplyButton.addEventListener("click", function () {
    operator = "*";
});

fourButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 4;
    }
    else {
        secondNumber = 4;
    }
    result.textContent = "4";
});

fiveButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 5;
    }
    else {
        secondNumber = 5;
    }
    result.textContent = "5";
});

sixButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 6;
    }
    else {
        secondNumber = 6;
    }
    result.textContent = "6";
});

subtractButton.addEventListener("click", function () {
    operator = "-";
});

oneButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 1;
    }
    else {
        secondNumber = 1;
    }
    result.textContent = "1";
});

twoButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 2;
    }
    else {
        secondNumber = 2;
    }
    result.textContent = "2";
});

threeButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 3;
    }
    else {
        secondNumber = 3;
    }
    result.textContent = "3";
});

addButton.addEventListener("click", function () {
    operator = "+";
});

zeroButton.addEventListener("click", function () {
    if (firstNumber == null) {
        firstNumber = 7;
    }
    else {
        secondNumber = 7;
    }
    result.textContent = "0";
});

dotButton.addEventListener("click", function () {
    result.textContent = - Number(result.textContent);
});

equalsButton.addEventListener("click", function () {
    if (firstNumber != null && secondNumber != null && operator != null) {
        let output = operate(operator,firstNumber,secondNumber);
        if (Number.isInteger(output)) {
            result.textContent = output;
        }
        else {
            result.textContent = output.toFixed(5);
        }        
        firstNumber = output;
        firstNumber = null;
        secondNumber = null;
        operator = null;
    }
});
