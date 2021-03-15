const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//Exercise 1
//Copy countries array(Avoid mutation)

countriesCopy = [];
for(const country of countries) {
    countriesCopy.push(country);
}
console.log(countriesCopy);

//Exercise 2
//Copy Countries array, Sort and store in sortedCountries variable
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

//Exercise 3
//Sort the webTechs array and mernStack array
const sortedWebTechs = [];
sortedWebTechs.push(webTechs.sort());
console.log(sortedWebTechs);

const sortedMernStack = [];
sortedMernStack.push(mernStack.sort());
console.log(sortedMernStack);

//Exercise 4
/*Extract all the countries containing the word 'land' from the [countries array]
and print it as array*/

landArray = [];

for(const country of countries) {
    if(country.includes('land')) {
        landArray.push(country);
        console.log(landArray);
    } else {
        continue;
    }
}

//Exercise 5
//Find the country containing the hightest number of characters in the [countries array]
let maxLength = 0;
let maxLengthCountry;
for(const country of countries) {
    if(country.length > maxLength) {
        maxLength = country.length;
        maxLengthCountry = country;
    }
}
console.log(maxLengthCountry);

//Exercise 6
/*Extract all the countries contain the word 'land' from the [countries array]
and print it as array */

//Solution same as exercise 4

//Exercise 7
/*Extract all the countries containing only four characters from the [countries array]
and print it as array*/

fourLengthCountry = [];
for(const country of countries) {
    if(country.length === 4) {
        fourLengthCountry.push(country);
        console.log(fourLengthCountry);
    } else {
        console.log('No country in the countries array has only 4 charaacters.');
    }
}

//Exercise 8
/*Extract all the countries containing two or more words from the 
[countries array] and print it as array. */

const countriesChar = [];
for(const country of countries) {
    if(country.length > 2) {
        countriesChar.push(country);
    } else {
        continue;
    }
}
console.log(countriesChar);

//Exercise 9
//Reverse the [countries array] and capitalize each country and store it as an array.

let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
} 
console.log(capReverseCountries);



