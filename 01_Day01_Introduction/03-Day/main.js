//Level 1

//Exercise 1

let firstName = 'Bisola';
let lastName = 'Onaolapo';
let city = 'Abuja';
let age = '22';
let isMarried = false;
let year = 2021;

console.log(typeof(firstName)); //string
console.log(typeof(lastName)); //string
console.log(typeof(city)); //string
console.log(typeof(age)); //string 
console.log(typeof(isMarried)); //boolean
console.log(typeof(year)); //number

//Exercise 2
console.log ('10' == 10); //true
console.log ('10' === 10); //false

//Exercise 3
console.log (parseInt('9.8') == 10);

//Exercise 4
let name = 'Cynthia';
let myAge = 10;
let negative = -5;

let empty = '';
let undecided;
let nothing = null;

//Exercise 5
console.log(4 > 3);     //true
console.log(4 >= 3);    //true
console.log(4 < 3);     //false
console.log(4 <= 3);    //false
console.log(4 == 4);    //true
console.log(4 === 4);   //true
console.log(4 != 4);    //false
console.log(4 !== 4);   //false
console.log(4 != '4');  //false
console.log(4 == '4');  //true
console.log(4 === '4'); //false

let lang1 = 'python';
let lang2 = 'jargon';

console.log(lang1.length !== lang2.length); //false

//Exercise 6
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

console.log(!(lang1.includes('on'))); //false
console.log(!(lang2.includes('on'))); //false

//Exercise 7


/*Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now*/