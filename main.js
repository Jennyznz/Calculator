const numOne = 0;
const numTwo = 0;
const operator = "";



// Performs calculation
function operate (a, b, op) {
    if (op === "+") {
        return add(a, b);
    } 
    else if (op === "-") {
        return subtract(a, b);
    }
    else if (op === "*") {
        return multiply(a, b);
    }
    else if (op === "/") {
        return divide(a, b);
    }
}

// Basic math functions
function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y){
    return (x / y); // all JS arithmetic is done in floating point
}

