const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//Exercise 1
//Copy countries array(Avoid mutation)

countriesCopy = [];
for(country of countries) {
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

for(country of countries) {
    if(country.includes('land')) {
        landArray.push(country);
        console.log(landArray);
    } else {
        continue;
    }
}

