//Exercise 1
let base = prompt("Enter number", "Input base value");
baseInt = parseInt(base);

let height = prompt("Enter number", "Input height value");
heightInt = parseInt(height);

areaOfTriangle = 0.5 * baseInt * heightInt;
console.log(`Area of triangle is ${areaOfTriangle}`);

//Exercise 2

let sideA = prompt("Enter number", "Input 1st value");
sideAInt = parseInt(sideA);

let sideB = prompt("Enter number", "Input 2nd value");
sideBInt = parseInt(sideB);

let sideC = prompt("Enter number", "Input 3rd value");
sideCInt = parseInt(sideC);

perimeterOfTriangle = sideAInt + sideBInt + sideCInt;
console.log(`Perimeter of triangle is ${perimeterOfTriangle}`);

//Exercise 3

let length = prompt("Enter number", "Input length value");
lengthInt = parseInt(length);

let width = prompt("Enter number", "Input width value");
widthInt = parseInt(width);

areaOfRectangle = lengthInt * widthInt;
console.log(`Area of rectangle is ${areaOfRectangle}`);

//Exercise 4

let radius = prompt("Enter number", "Input radius value");
radiusInt = parseInt(radius);

let pi = 3.14;
areaOfCircle = pi * radiusInt * radiusInt;
console.log(`Area of rectangle is ${areaOfRectangle}`);

//perimeter of a circle
perimeterOfCircle = 2 * pi * radiusInt;
console.log(`Area of rectangle is ${areaOfRectangle}`);

//Exercise 5
let x_intercept = 1;
let y_intercept = -2;
let slope1 = 2;

// Exercise 6
let slope2 = (10 - 2) / (6 - 2);

//Exercise 7
slope2 > slope1
  ? console.log("Slope2 is bigger")
  : console.log("slope1 is bigger");

//Exercise 8
let x = -3;
let y = x ** 2 + x * 6 + 9;

console.log(y);

//Exercise 9

let hours = prompt("Enter number", "Input hours");
hoursInt = parseInt(hours);

let rate = prompt("Enter number", "Input rate");
rateInt = parseInt(rate);

pay = rateInt * hoursInt * 30;
console.log(`Your pay for the week is ${pay} dollars`);

//Exercise 10
let userName = prompt("Enter name", "");

userName.length > 7 ? alert("Your name is long") : alert("Your name is short");

//Exercise 11
let myfirstName = "Bisola";
let mylastName = "Onaolapo";

myfirstName.length > mylastName.length
  ? alert("Your first name is longer than your family name")
  : alert("Your family name is longer than your first name");

//Exercise 12

let myAge2 = 22;
let yourAge2 = 5;

let ageDifference = myAge2 - yourAge2;

console.log(`I am ${ageDifference} years older than you.`);

//Exercise 13
let userBirthYear = prompt("Enter birth year", "");
let userBirthYearInt = parseInt(userBirthYear);

let userAge;
userAge = 2021 - userBirthYearInt;
let yearsRemaining = 18 - userAge;

userAge >= 18
  ? alert(`You are ${userAge}. You are old enough to drive`)
  : alert(
      `You are ${userAge}. You will be allowed to drive after ${yearsRemaining} years`
    );

//Exercise 14

let numberOfYears = prompt("Enter number of years lived", "");
let numberOfYearsInt = parseInt(numberOfYears);

let totalSecondsLived = numberOfYearsInt * 2592000 * 12;

numberOfYearsInt <= 100
  ? console.log(`You have lived ${totalSecondsLived}`)
  : alert("Input a number less than 100");

//Exercise 15
const now = new Date();
const presentYear = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${presentYear}/${month}/${date} ${hours}:${minutes}`); //2021/2/16 23:45
console.log(`${date}/${month}/${presentYear} ${hours}:${minutes}`); //16/2/2021 23:45
