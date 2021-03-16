//Exercise 1
//Declare a function _fullName_ and it print out your full name.

function printFullName() {
    let fName = `Bisola`;
    let lName = `Onaolapo`;
    const fullName = `${fName} ${lName}`;
    return fullName;
}
console.log(printFullName());

//Exercise 2
/*Declare a function _fullName_ and now it takes firstName, lastName as a parameter 
and it returns your full - name.*/

function fullName(fName, lName) {
    const printFullName = `Your fullname is ${fName} ${lName}.`;
    return printFullName;
}
console.log(fullName('Bisola', 'Onaolapo'));

//Exercise 3
//Declare a function _addNumbers_ and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(`(The sum of two numbers are ${addNumbers(2,8)}`);

//Exercise 4 
/*An area of a rectangle is calculated as follows: _area = length x width_.
Write a function which calculates _areaOfRectangle_. */

function areaOfRectangle(length, width) {
    let calcAreaOfRectangle = length * width;
    return calcAreaOfRectangle;
}
console.log(`The area of rectangle is ${areaOfRectangle(5, 10)}`);

//Exercise 5
/*A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. 
Write a function which calculates _perimeterOfRectangle_. */

function perimeterOfRectangle(length, width) {
    let calcPeriOfRectangle = 2 * (length + width);
    return calcPeriOfRectangle;
}

console.log(`The perimeter of rectangle ${perimeterOfRectangle(2,4)}`);

//Exercise 6
/* A volume of a rectangular prism is calculated as follows: _volume = length x width x height_.
Write a function which calculates _volumeOfRectPrism_. */

function volumeOfPrism(length, width, height) {
    let calcVolumeOfPrism = length * width * height;
    return calcVolumeOfPrism;
}

console.log(`The volume of prism is ${volumeOfPrism(2, 3 ,4)}`);

//Exercise 7
/*Area of a circle is calculated as follows: _area = π x r x r_. 
Write a function which calculates _areaOfCircle_ */

function areaOfCircle(r, pi = 3.14) {
    let calcAreaOfCircle = Math.round(pi * r * r);
    return calcAreaOfCircle;
}

console.log(`The area of circle is ${areaOfCircle(3)}`);

//Exercise 8 
/* Circumference of a circle is calculated as follows: _circumference = 2πr_. 
Write a function which calculates _circumOfCircle_ */

function circumferenceOfCircle(r, pi = 3.14) {
    let calcCirOfCircle = Math.round(2 * pi * r);
    return calcCirOfCircle;
}
console.log(`The circumference of circle is ${circumferenceOfCircle(3)}`);

//Exercise 9
/*Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_. */

function density(mass, volume) {
    calcDensity = mass / volume;
    return calcDensity;
}

console.log(`The density of the substance is ${density(20, 5)}`);

//Exercise 10
/*Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_. */

function speed(distance, time) {
    calcSpeed = distance / time;
    return calcSpeed;
}

console.log(`Current speed is ${speed(80, 5)}km/hr.`);

//Exercise 11
/*Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_. */

function weight(mass, gravity = 9.8) {
    calcWeight = Math.round(mass * gravity);
    return calcWeight;
}

console.log(`The total weight is ${weight(50)}N.`);

//Exercise 12
/*Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelciusToFahrenheit_. */


function celsiusToFahrenheit(celsius) {
    fahrenheitTemp = (celsius * (9/5)) + 32;
    return fahrenheitTemp;
}

console.log(`0 degrees celsius converted to fahrenheit is ${celsiusToFahrenheit(0)}degrees F.`);