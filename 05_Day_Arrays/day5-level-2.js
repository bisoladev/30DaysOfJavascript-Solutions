//Exercise 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const fullStop = /\./g;
const comma = /,/g;

const removedSymbols = text.replace(fullStop, '').replace(comma, '');
console.log(removedSymbols);

let words = removedSymbols.match(/\w+/g);
console.log(words);
console.log(words.length);

//Exercise 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(4,1);
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//Exercise 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
