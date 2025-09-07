let numOne = NaN;
let numTwo = NaN;
let operator = "";

const buttonsBox = document.getElementById("buttons-box");
const ops = document.querySelectorAll(".op");   // ops is a NodeList

buttonsBox.addEventListener("click", (e) => {
    const target = e.target;
    const content = target.textContent;

    // Add digits to display
    // Enable "=""
    if (target.classList.contains("num")){
        document.getElementById("display-content").innerHTML += content;
        if (!(operator === "")) {
            document.querySelector(".eq").classList.remove("disabled");
        }
    }

    else if (target.classList.contains("op")){
        // Store first num and op
        numOne = parseFloat(document.getElementById("display-content").textContent);
        operator = content;
        // Add op to display
        document.getElementById("display-content").innerHTML += content;
        // Prevent consecutive selection of ops
        ops.forEach(op => op.classList.add("disabled"));
        // Prevent "=" after an op
        document.querySelector(".eq").classList.add("disabled");

    }

    else if (target.classList.contains("eq") && !(numOne === NaN)){
        // Store second num
        let allText = document.getElementById("display-content").textContent;
        let parts = allText.split(operator);
        numTwo = parseFloat(parts[1]);
        // Enable op selection
        ops.forEach(op => op.classList.remove("disabled"));
        // Calculate
        // Update display
        document.getElementById("display-content").innerHTML = operate(numOne, numTwo, operator);
    }

    // Clear display
    else if (target.classList.contains("clear")){
        document.getElementById("display-content").innerHTML = "";
    }

    // Undo latest click
    else if (target.classList.contains("undo")){
        // Undo
        document.getElementById("display-content").innerHTML = document.getElementById("display-content").innerHTML.slice(0, -1);

        // Operator case
        ops.forEach(op => op.classList.remove("disabled"));
        operator = "";
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
    return (x * y);
}

function divide(x, y){
    return (x / y); // all JS arithmetic is done in floating point
}

