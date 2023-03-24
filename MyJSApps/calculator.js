const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

const calculate = (operator, num1, num2 ) => {
    return operator(num1, num2) 
};

let result = calculate(mul, add(1, 2), add(2, 3));
console.log(result);