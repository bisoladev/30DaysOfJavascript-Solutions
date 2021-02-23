//Exercise 1
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const fullStop = /\./g;
const comma = /,/g;

const removedSymbols = text.replace(fullStop, '').replace(comma, '');
console.log(removedSymbols);

let words = removedSymbols.match(/\w+/g);
console.log(words);
console.log(words.length);