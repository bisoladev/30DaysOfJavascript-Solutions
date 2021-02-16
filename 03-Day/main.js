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

const fullDate = new Date();
console.log(fullDate); //Sat Feb 13 2021 22:24:27 GMT+0100 (West Africa Standard Time)

//To get present year
console.log(fullDate.getFullYear()); //2021

//To get present month
console.log(fullDate.getMonth() + 1); //2

//To get present date of the month
console.log(fullDate.getDate()); //13

//To get present day of the week
console.log(fullDate.getDay()); //6

//To get present hour of the day
console.log(fullDate.getHours()); //22

//To get present minute of the hour
console.log(fullDate.getMinutes()); //38

//To get the numbers of seconds elaspsed from January 1, 1970 to now
console.log(fullDate.getTime()); //1613252259560


