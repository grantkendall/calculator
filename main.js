// x and y are only accepting single-digit values
let x;
let y;
let operator;
let result;

// After HTML refactor, double-check variable references
const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const output = document.querySelector(".output");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

const updateOutput = (() => {
    if (x && operator && y) {
        output.textContent = `${x} ${operator} ${y}`;
    } 
    else if (x && operator) {
        output.textContent = `${x} ${operator}`;
    }
    else {
        output.textContent = x; 
    } 
});

const clearOutput = (() => {
    output.textContent = "";
    x = undefined;
    y = undefined;
    operator = undefined;
});

// 0 isn't being printed
numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        if (x != undefined) {
            // Might be a way to do this that doesn't rely on the button's text
            y = +btn.textContent;
        }
        else {
            x = +btn.textContent;
        }
        updateOutput();
    })
});

operators.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = btn.textContent;
        updateOutput();
    })    
});

equals.addEventListener("click", () => {
    operate(x, y, operator);
    output.textContent = result;
    // Result becomes the first operand
    x = result;
    y = undefined;
    operator = undefined;
    result = undefined;
});

clear.addEventListener("click", () => clearOutput());

const add = ((a, b) => a + b);

const subtract = ((a, b) => a - b);

const multiply = ((a, b) => a * b);

const divide = ((a, b) => a / b);

function operate(x, y, operator) {
    switch (operator) {
        case "+":
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
        default:
            result = "ERROR";
            break;
    }
};