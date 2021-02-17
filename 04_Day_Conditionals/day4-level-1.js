//Exercise 1
let userAge = prompt('Enter your age', 'age eligibility');
let userAgeInt = parseInt(userAge);

let yearsRemaining = 18 - userAge;

userAge >= 18 
    ? alert(`You are ${userAge}. You are old enough to drive`) 
    : alert (`You are ${userAge}. You will be allowed to drive after ${yearsRemaining} years`);

//Exercise 2
let myAge = 22;
let yourAge = prompt('Enter your age', 'age difference');
let yourAgeInt = parseInt(yourAge);

let myAgeDifference = myAge - yourAgeInt;
let yourAgeDifference = yourAgeInt - myAge;

if(myAge > yourAgeInt) {
    console.log(`I am ${myAgeDifference} older than you`)
} else if (yourAgeInt > myAge) {
    console.log(`You are ${yourAgeDifference} older than me`)
} else {
    console.log(`Your age is the same as mine`);
}

//Exercise 3
let a = 5;
let b = 3;

//using if else statement
if(a > b) {
    console.log(`${a} is greater than ${b}`);
} else if(b > a) {
    console.log(`${b} is greater than ${a}`)
} else {
    console.log(`${a} is equal to ${b}`);
}

//using tenary condition
a > b
    ? console.log(`${a} is greater than ${b}`)
    : b > a ? console.log(`${b} is greater than ${a}`)
    : console.log(`${a} is equal to ${b}`);

//Exercise 4

let userInput = prompt('Enter number', 'even or odd number check');
let userInputInt = parseInt(userInput);

userInputInt % 2 === 0 
    ? console.log (`${userInputInt} is an even number`)
    : console.log (`${userInputInt} is an odd number`);
