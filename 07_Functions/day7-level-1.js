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