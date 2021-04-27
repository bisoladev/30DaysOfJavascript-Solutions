const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Exercise 1
// Explain the difference between **_forEach, map, filter, and reduce_**.
/*
forEach
the forEach method takes in an array
 and execute a function for each element in
 the array 
*/

/*map
the map method produces a new array
 from the provided callback function
 to be executed on each array
*/

/*filter
this also creates a new array that 
passes the test of the callback function provided
*/

/*reduce
this produces a single value from an array
provided it meets the callback function
*/

//Exercise 2
// Define a call function before you use them in forEach, map, filter or reduce.

//Exercise 3
// Use **_forEach to console.log each country in the countries array.

countries.forEach((element) => console.log(element));

//Exercise 4
// Use **_forEach_** to console.log each name in the names array.

names.forEach((element) => console.log(element));

//Exercise 5
// Use **_forEach_** to console.log each number in the numbers array.

numbers.forEach((element) => console.log(element));

//Exercise 6
// Use **_map_** to create a new array by changing each country to uppercase in the countries array.

const newCountriesArr = countries.map((element) => element.toUpperCase());
console.log(newCountriesArr);

//Exercise 7
// Use **_map_** to create an array of countries length from countries array.

const countriesLenArr = countries.map((element) => element.length);
console.log(countriesLenArr);

//Exercise 8
// Use **_map_** to create a new array by changing each number to square in the numbers array

const sqrNumArr = numbers.map((element) => element * element);
console.log(sqrNumArr);

//Exercise 9
// Use **_map_** to change to each name to uppercase in the names array

const newNamesArr = names.map((element) => element.toUpperCase());
console.log(newNamesArr);

//Exercise 10
// Use **_map_** to map the products array to its corresponding prices.

const productToPrice = products.map((element) => `${element.product} => ${element.price}`);
console.log(productToPrice);

//Exercise 11
// Use **_filter_** to filter out countries containing **_land_**.

const countriesWithLand = countries.filter((country) => country.toLowerCase().includes('land'));
console.log(countriesWithLand);

//Exercise 12
// Use **_filter_** to filter out countries having six character.

const countriesWithSixChars = countries.filter((country) =>
  country.length === 6
);

console.log(countriesWithSixChars);

//Exercise 13
// Use **_filter_** to filter out countries containing six letters and more in the country array.

const countriesWithSixCharsOrMore = countries.filter((country) =>
  country.length >= 6
);

console.log(countriesWithSixCharsOrMore);

//Exercise 14
// Use **_filter_** to filter out country start with 'E';

const countriesStartWithE = countries.filter((country) => country.indexOf('E') == 0);

console.log(countriesStartWithE);

//Exercise 15
// Use **_filter_** to filter out only prices with values.

const productsWithPrices = products.filter((element) => {
  return element.price >= 1;
})

console.log(productsWithPrices);

//Exercise 16
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

array = ['b','c','e',1];

const getStringLists = (arr) => {
  let onlyStr = arr.filter((item) => {
    return typeof item == 'string';
  })
  return onlyStr;
}

console.log(getStringLists(array));

//Exercise 17
// Use **_reduce_** to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

//Exercise 18
// Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**

//Exercise 19
// Explain the difference between **_some_** and **_every_**

/** some -> returns true if at least one of the element of an iterable satisfies the condition imposed by the callback, false if none do.     
   
   every -> returns treu if all the valeus of iterable satisfy the condition imposed by callback, returns false if none at least no does not satisfy it.
**/ 

//Exercise 20
// Use **_some_** to check if some names' length greater than seven in names array

const checkSomeLength = names.some((element) => {
  return element.length > 7;
})

console.log(checkSomeLength);

//Exercise 21
// Use **_every_** to check if all the countries contain the word land

const checkCountryLand = countries.every((element) => element.toLowerCase().includes('land'));
console.log(checkCountryLand);




