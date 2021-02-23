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
/*add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'*/

