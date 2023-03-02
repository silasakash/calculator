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
