//Level 1 Exercise

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

//Level 2 Exercise

//Question 1
let paragraph1 = "The quote 'There is no exercise better for the heart than reaching down\
and lifting people up.' by John Holmes teaches us to help one another.";

console.log(paragraph1);

//Question 2
let paragraph2 = "Love is not patronizing and charity isn't about pity, it is about love.\
 Charity and love are the same with charity you give love, so don't just give money \
 but reach out your hand instead."

 console.log(paragraph2);

 //Question 3
 console.log('10' === 10);

 let num = '10';
 let numInt = parseInt(num);
 console.log(numInt);

 //Question 4
 console.log(9.8 === 10);

 console.log(Math.round(9.8));

 //Question 5
 let firstWord = "Python";
 let secondWord = "Jargon";
 console.log(firstWord.includes('on'));
 console.log(secondWord.includes('on'));

 //Question 6
 let confirmation ="I hope this course is not full of jargon. Check if jargon is in the \
 sentence."

 console.log(confirmation.includes('jargon'));

 //Question 7
let randomNum = Math.random();        
let numBtnZeroAndHundred = randomNum * 101;

console.log(numBtnZeroAndHundred);       

let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred);
console.log(randomNumRoundToFloor);

//Question 8
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(50, 100));

//Question 9
console.log(getRandomInt(0, 225));

//Question 10
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * (js.length - 1));
console.log(js[randomIndex]);

//Question 11
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

//Question 12
let cutOut= sentence.substr(30, 24);
console.log(cutOut);