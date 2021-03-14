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
