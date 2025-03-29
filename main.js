let x;
let y;
let operator;

const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const output = document.querySelector(".output");

const updateOutput = (() => output.textContent = `x:${x} operator: ${operator} y:${y}`);
 

numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        if (x != undefined) {
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

const equals = document.querySelector("#equals");

one.addEventListener("click", () => x = 1);
two.addEventListener("click", () => y = 2);

equals.addEventListener("click", () => operate(x, y, operator));

const add = ((a, b) => a + b);

const subtract = ((a, b) => a - b);

const multiply = ((a, b) => a * b);

const divide = ((a, b) => a / b);

function operate(x, y, operator) {
    switch (operator) {
        case "+":
            output.textContent = add(x, y);
            break;
        case "-":
            output.textContent = subtract(x, y);
            break;
        case "*":
            output.textContent = multiply(x, y);
            break;
        case "/":
            output.textContent = divide(x, y);
            break;
        default:
            output.textContent = "ERROR";
            break;
    }
};