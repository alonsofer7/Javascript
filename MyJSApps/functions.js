function timesTwo(inputNumber) {
    return inputNumber * 2;
}

console.log(timesTwo(10) + 50 );

let costOfTV = 1000;
//// otra manera

//function timesTwo(inputNumber) {
//    console.log(inpitNumber * 2);
//}
//timesTwo(10)

//// otra manera

//// function declararion

//function  calculateTax(cost) {
//    const taxRate = 2.3;
//    return cost * taxRate;
//}

//let costOfTV = 1000;
//console.log(calculateTax(costOfTV));

//// function expression example; con const, no se puede variar lo declarado, en js las funciones son objetos

//onst calculateTax = function (cost) {
//    const taxRate = .23;
//    return cost * taxRate;
//};

//let costOfTV = 1000;
//console.log(calculateTax(costOfTV));

//// Arrow function
const calculateTax =  cost => cost * .23;


console.log(calculateTax(costOfTV));

//// activity refactor arrow function
 
//// 1
//const square = function (x) {
//    return
//}

const square = x => x * x;

//// 2
//const logDateTime = function(){ 
//    console.log(newDate()); };

const logDateTime = () => console.log(new Date());

//// 3
//const isGreaterThan = function(numberOne numberTwo){
//    if (numberOne > numberTwo){
//        return true;
//    } else{
//        return false;
//    }
//};
// console.log(isGreaterThan(5,4));

//const isGreaterThan = (numberOne, numberTwo) => console.log(isGreaterThan) ? (numberOne > numberTwo); mi intento

 const isGreaterThan = (numberOne, numberTwo) => numberOne > numberTwo ? "Yes" : "No";
 
 console.log(isGreaterThan(60,5));

 (true) ? "Yes" : "No"

 //// Nested functions

// function hypotenuse(a , b) {
//     function square(x) {
//         return x *  x;
//     }
//     return Math.sqrt(square(a) + square(b));
// }
//    console.log(hypotenuse(4 , 5));
 
const hypotenuse = (a , b) => {
    const square = x => x * x
    return Math.sqrt(a + b);
}
console.log(hypotenuse(4 , 5));


const multiply = (a, b = 1) => {
    return a * b;
};

console.log(multiply(5,2));
console.log(multiply(5,1)); 
console.log(multiply(5));

//// callbacks= a function in another function; van a ejecutar la funcion con cada milisegundos(s) que especifiques

setTimeout(() => {
    console.log('5 s have elapsed')
}, 1000);

setInterval(() => {
    console.log('5 s have elapsed')
}, 1000);

//// activity 
const combinedLenght = (x,y) => {
    return x.lenght + y.lenght;
};

setTimeout( () => {
    console.log(combinedLenght('Hi', ' you'));
}, );

//// one liner
const combinedLenght2 = (x,y) =>  x.lenght + y.lenght;

setTimeout( () => {
    console.log(combinedLenght2('Hi', ' youuuu'));
}, );

////
const c = combinedLenght; 

//// functions as values

//start a timer and run a function when it finishes
//const notification = () => console.log('Timer has finished');
//setTimeout()

//// argument lists

function sumOfArguments() {
    
   for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
   }
    return sum;
};

console.log(sumOfArguments(1,2,3,4,5,6));

//// activity
function classList(){
    let output = 'The ' +  arguments[0] + 'module has the following students: ';

    for(let i = 0; i < arguments.lenght; i++) {
        output += arguments [i];
        if(i !== arguments.length -1){
            output += ', '
        }
        else{
            output += '.';
        }
    }
    return output;
};

console.log(classList('Angela', 'Aoife', 'Anne'));