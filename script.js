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
    let calculation = no1 + no2;
    return checkDisplayLimit(calculation,9);
}

function subtract(no1, no2) {
    let calculation = no1 - no2;
    return checkDisplayLimit(calculation,9);
}

function multiply(no1, no2) {
    let calculation = no1 * no2;
    return checkDisplayLimit(calculation,9);
}

function divide(no1, no2) {
    let calculation = no1 / no2;
    return checkDisplayLimit(calculation,9);
}

function negate(no) {
    let calculation = no * -1;
    return checkDisplayLimit(calculation,9);
}

function operate(operator, operand1, operand2) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
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
}

function checkDisplayLimit(number, maxDigits) {
    let numberString = number.toString();
    let totalDigits = numberString.replace(".", "").length;
    let maxAllowedDigits = maxDigits + (numberString.includes(".") ? 1 : 0);
    
    if (totalDigits <= maxAllowedDigits) {
      return number;
    } else {
      return parseFloat(number.toFixed(maxDigits));
    }
}


let firstNumber = null;
let secondNumber = null;
let operator = null;
let currentNumber = "";

acButton.addEventListener("click", function () {
    result.textContent = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentNumber = "";
});

negateButton.addEventListener("click", function () {
    result.textContent = - currentNumber;
    currentNumber = "-" + currentNumber;
    if (operator != null) {
        secondNumber = currentNumber;
    }
    else {
        firstNumber = currentNumber;
    }    
});

percentageButton.addEventListener("click", function () {
    result.textContent = currentNumber / 100;
    currentNumber = currentNumber / 100;
    firstNumber = currentNumber;
});

divideButton.addEventListener("click", function () {
    if (operator != null) {
        currentNumber = operate(operator,firstNumber,secondNumber);
        firstNumber = currentNumber;
    }
    operator = "/";
    result.textContent = currentNumber;
    currentNumber = "";

});

sevenButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "7";
        } else {
            currentNumber += "7";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "7";
        } else {
            currentNumber += "7";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

eightButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "8";
        } else {
            currentNumber += "8";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "8";
        } else {
            currentNumber += "8";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

nineButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "9";
        } else {
            currentNumber += "9";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "9";
        } else {
            currentNumber += "9";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

multiplyButton.addEventListener("click", function () {
    if (operator != null) {
        currentNumber = operate(operator,firstNumber,secondNumber);
        firstNumber = currentNumber;
    }
    operator = "*";
    result.textContent = currentNumber;
    currentNumber = "";
});

fourButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "4";
        } else {
            currentNumber += "4";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "4";
        } else {
            currentNumber += "4";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

fiveButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "5";
        } else {
            currentNumber += "5";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "5";
        } else {
            currentNumber += "5";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

sixButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "6";
        } else {
            currentNumber += "6";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "6";
        } else {
            currentNumber += "6";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

subtractButton.addEventListener("click", function () {
    if (operator != null) {
        currentNumber = operate(operator,firstNumber,secondNumber);
        firstNumber = currentNumber;
    }
    operator = "-";
    result.textContent = currentNumber;
    currentNumber = "";
});

oneButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "1";
        } else {
            currentNumber += "1";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "1";
        } else {
            currentNumber += "1";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

twoButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "2";
        } else {
            currentNumber += "2";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "2";
        } else {
            currentNumber += "2";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

threeButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "3";
        } else {
            currentNumber += "3";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "3";
        } else {
            currentNumber += "3";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

addButton.addEventListener("click", function () {
    if (operator != null) {
        currentNumber = operate(operator,firstNumber,secondNumber);
        firstNumber = currentNumber;
    }
    operator = "+";
    result.textContent = currentNumber;
    currentNumber = "";
});

zeroButton.addEventListener("click", function () {
    if (operator == null) {
        if (currentNumber === "") {
            currentNumber = "0";
        } else {
            currentNumber += "0";
        }
        result.textContent = currentNumber;
        firstNumber = currentNumber;
    }   
    else {
        if (currentNumber === "") {
            currentNumber = "0";
        } else {
            currentNumber += "0";
        }
        result.textContent = currentNumber;
        secondNumber = currentNumber;
    } 
});

dotButton.addEventListener("click", function () {
    if (!result.textContent.includes(".")) {
        if (operator == null) {
            if (currentNumber === "") {
                currentNumber = ".";
            } else {
                currentNumber += ".";
            }
            result.textContent = currentNumber;
            firstNumber = currentNumber;
        }   
        else {
            if (currentNumber === "") {
                currentNumber = ".";
            } else {
                currentNumber += ".";
            }
            result.textContent = currentNumber;
            secondNumber = currentNumber;
        }
    }
    
});

equalsButton.addEventListener("click", function () {
    if (firstNumber != null && secondNumber != null && operator != null) {
        let output = operate(operator,firstNumber,secondNumber);
        if (Number.isInteger(output)) {
            result.textContent = output;
        }
        else {
            result.textContent = output.toFixed(8).replace(/\.?0+$/, '');
        }        
        firstNumber = output;
        secondNumber = null;
        operator = null;
        currentNumber = "";
    }
});

//keyboard functions
document.addEventListener("keydown", function(event) {
    if (event.key === "0") {
        zeroButton.click();
    }
    if (event.key === "1") {
        oneButton.click();
    }
    if (event.key === "2") {
        twoButton.click();
    }
    if (event.key === "3") {
        threeButton.click();
    }
    if (event.key === "4") {
        fourButton.click();
    }
    if (event.key === "5") {
        fiveButton.click();
    }
    if (event.key === "6") {
        sixButton.click();
    }
    if (event.key === "7") {
        sevenButton.click();
    }
    if (event.key === "8") {
        eightButton.click();
    }
    if (event.key === "9") {
        nineButton.click();
    }
    if (event.key === "/") {
        divideButton.click();
    }
    if (event.key === "*") {
        multiplyButton.click();
    }
    if (event.key === "+") {
        addButton.click();
    }
    if (event.key === "-") {
        subtractButton.click();
    }
    if (event.key === "=") {
        equalsButton.click();
    }
});
