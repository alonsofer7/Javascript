// let donuts = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];

// donuts.forEach((donut, i) => {
//     console.log(`donut option ${i + 1} is ${donut}`);
// });


//Books
let books = ['Thinking in JS', 'JS Patterns', 'JS: The Good Parts', 'ES6 and Beyond'];

books.forEach((book) => {
    console.log(`I need to read ${book}`);
});


//Values
const a = [1, 2, 3, 4, 5];

const b = a.map(value => value * value);
console.log(b);


// Donuts
const donuts = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];

const donCap = donuts.map(flavour => flavour.charAt(0).toUpperCase() + flavour.slice(1) + " donut");
console.log(donCap);

// other solution
// let formattedDonuts = donuts.map((donut) => donut[0].toUpperCase() + donut.slice(1));


// Filter String Length
const dictionary = ['flabbergasted', 'outrageous', 'crazy', 'absurd'];

const isLongWord = dicStr => dicStr.length > 6;
const longWords = dictionary.filter(isLongWord);
// const longWords = dictionary.filter(dicStr => dicStr.length > 6);


// Filter Positive Numbers
const posNeg = [1, -1, -2, 3, 5, -7]

const isNumPos = value => value > 0;
const posNumbers = posNeg.filter(isNumPos);