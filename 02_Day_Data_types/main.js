//Question 1
let challenge = '30 Days Of JavaScript';

//Question 2
console.log(challenge);

//Question 3
console.log(challenge.length);

//Question 4
console.log(challenge.toUpperCase());

//Question 5
console.log(challenge.toLowerCase());

//Question 6
console.log(challenge.substr(0,2));

console.log(challenge.substring(0, 2));

// Question 7
console.log(challenge.substr(3, 19));
console.log(challenge.substring(3, 21));

//Question 8
console.log(challenge.includes('Script'));

//Question 9
console.log(challenge.split());

//Question 10
console.log(challenge.split(' '));

//Question 11
let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(brands.split(','));

//Question 12
console.log(challenge.replace('JavaScript', 'Python'));

//Question 13
console.log(challenge.charAt(15));

//Question 14
let lastIndex = challenge.length -1;
console.log(challenge.charCodeAt(lastIndex));

//Question 15
console.log(challenge.indexOf('a'));

//Question 16
console.log(challenge.lastIndexOf('a'));

//Question 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//Question 18
console.log(sentence.lastIndexOf('because'));

//Question 19
console.log(sentence.search('because'));

//Question 20
let addSpace = ' 30 Days Of JavaScript ';
console.log(addSpace.trim());

//Question 21
console.log(challenge.startsWith('30'));

//Question 22
console.log(challenge.endsWith('t'));

//Question 23
let pattern = /a/gi;
console.log(challenge.match(pattern));

//Question 24
let incomplete = '30 Days of';
console.log(incomplete.concat(' JavaScript'));

//Question 25
console.log(challenge.repeat(2));