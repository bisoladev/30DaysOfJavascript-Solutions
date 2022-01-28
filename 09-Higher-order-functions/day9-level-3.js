//Exerciise 1
// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// //To sort countries by name
// countriesFile.sort((a,b) => {
//   if (a.name < b.name) return -1;
//   if (a.name < b.name) return 1;
//   return 0;
// })

// console.log(countriesFile);

// //To sort countries by capital
// countriesFile.sort((a,b) => {
//   if (a.capital < b.capital) return -1;
//   if (a.capital < b.capital) return 1;
//   return 0;
// })

// console.log(countriesFile);

// //To sort countries by population
// countriesFile.sort((a,b) => {
//   if (a.population < b.population) return -1;
//   if (a.population < b.population) return 1;
//   return 0;
// })

// console.log(countriesFile);

//Exercise 2
//Find the ten most spoken languages

// var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let counts = {};

for (let i = 0; i < countriesFile.length; i++) {
  let num = countriesFile[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
} 

console.log(counts);