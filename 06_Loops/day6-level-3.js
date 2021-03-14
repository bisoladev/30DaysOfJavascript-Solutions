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