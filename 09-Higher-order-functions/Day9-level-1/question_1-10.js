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

