let numOne = NaN;
let numTwo = NaN;
let operator = "";

const buttonsBox = document.getElementById("buttons-box");
const ops = document.querySelectorAll(".op");   // ops is a NodeList

// When user uses the keyboard
document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Digits
        // Add digits to display
        // Enable "="" and ops
    if ("0123456789".includes(key)){
        document.getElementById("display-content").textContent += key;
        ops.forEach(op => op.classList.remove("disabled"));
        if (!(operator === "")) {
            document.querySelector(".eq").classList.remove("disabled");
        }
    }

    else if ("+-*/".includes(key)){
        // Store first num and op
        numOne = parseFloat(document.getElementById("display-content").textContent);
        operator = key;
        // Add op to display
        document.getElementById("display-content").textContent += key;
        // Prevent consecutive selection of ops
        ops.forEach(op => op.classList.add("disabled"));
        // Prevent "=" after an op
        document.querySelector(".eq").classList.add("disabled");

    }

    else if ((key === "=" || key === "Enter") && !(isNaN(numOne))){
        // Store second num
        let allText = document.getElementById("display-content").textContent;
        let parts = allText.split(operator);
        numTwo = parseFloat(parts[1]);
        // Enable op selection and decimal point
        ops.forEach(op => op.classList.remove("disabled"));
        document.querySelector('.decimal').classList.remove("disabled");
        // Calculate
        // Update display
        document.getElementById("display-content").textContent = operate(numOne, numTwo, operator);
    }

    // No "clear" using keyboard

    // Undo latest click
    else if (key === "Backspace"){
        document.getElementById("display-content").textContent = document.getElementById("display-content").textContent.slice(0, -1);

        // Operator case
        ops.forEach(op => op.classList.remove("disabled"));
        operator = "";
    }
    // Add decimal point (max one for each number)
    else if (key === "."){
        document.getElementById("display-content").textContent += content;
        document.querySelector('.decimal').classList.add(disabled);
    }
});


// When user clicks
buttonsBox.addEventListener("click", (e) => {
    const target = e.target;
    const content = target.textContent;

    // Add digits to display
    // Enable "="" and ops
    if (target.classList.contains("num")){
        document.getElementById("display-content").textContent += content;
        ops.forEach(op => op.classList.remove("disabled"));
        if (!(operator === "")) {
            document.querySelector(".eq").classList.remove("disabled");
        }
    }

    else if (target.classList.contains("op")){
        // Store first num and op
        numOne = parseFloat(document.getElementById("display-content").textContent);
        operator = content;
        // Add op to display
        document.getElementById("display-content").textContent += content;
        // Prevent consecutive selection of ops
        ops.forEach(op => op.classList.add("disabled"));
        // Prevent "=" after an op
        document.querySelector(".eq").classList.add("disabled");

    }

    else if (target.classList.contains("eq") && !(isNaN(numOne))){
        // Store second num
        let allText = document.getElementById("display-content").textContent;
        let parts = allText.split(operator);
        numTwo = parseFloat(parts[1]);
        // Enable op selection and decimal point
        ops.forEach(op => op.classList.remove("disabled"));
        document.querySelector('.decimal').classList.remove("disabled");
        // Calculate
        // Update display
        document.getElementById("display-content").textContent = operate(numOne, numTwo, operator);
    }

    // Clear display. 
    // Reset buttons. 
    else if (target.classList.contains("clear")){
        document.getElementById("display-content").textContent = "";
        document.querySelector('.decimal').classList.remove("disabled");
        document.querySelector('.eq').classList.add("disabled");
        ops.forEach(op => op.classList.add("disabled"));
    }

    // Undo latest click
    else if (target.classList.contains("undo")){
        document.getElementById("display-content").textContent = document.getElementById("display-content").textContent.slice(0, -1);

        // Operator case
        ops.forEach(op => op.classList.remove("disabled"));
        operator = "";
    }
    // Add decimal point (max one for each number)
    else if (target.classList.contains("decimal")){
        document.getElementById("display-content").textContent += content;
        document.querySelector('.decimal').classList.add(disabled);
    }
});

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
    return (x * y).toFixed(5);
}

function divide(x, y){
    // Round to nearest five decimal digits
    return (x / y).toFixed(5); // all JS arithmetic is done in floating point
}

