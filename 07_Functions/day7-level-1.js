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
console.log(addNumbers(2,8));

//Exercise 4 
/*An area of a rectangle is calculated as follows: _area = length x width_.
Write a function which calculates _areaOfRectangle_. */

function areaOfRectangle(length, width) {
    let calcAreaOfRectangle = length * width;
    return calcAreaOfRectangle;
}
console.log(areaOfRectangle(5, 10));

//Exercise 5
/*A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. 
Write a function which calculates _perimeterOfRectangle_. */

function perimeterOfRectangle(length, width) {
    let calcPeriOfRectangle = 2 * (length + width);
    return calcPeriOfRectangle;
}

console.log(perimeterOfRectangle(2,4));

//Exercise 6
