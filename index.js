const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let preNumber = "";
let calculationOperator = "";
let currentNumber = "";

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        preNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};

equalSign.addEventListener("click", (event) => {
    calculate();
    updateScreen(currentNumber);
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(preNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(preNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(preNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseInt(preNumber) / parseInt(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
};

const clearAll = () => {
    preNumber = "";
    calculationOperator = "";
    currentNumber = "";
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
