const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'Germany', 'Portugal', 'England', 'Netherland', 'Belgium', 'France', 'Nigeria', 'U.S.A', 'Ethiopia', 'Armenia'];

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
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

  let totalPrice = products.map(product => {
    return product.price;
  }).filter(price => {
    return price > 0;
  }).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  console.log(totalPrice);

  //Exercise 2
  // Find the sum of price of products using only reduce

  let sumProductsPrice = products.reduce((sum, obj) => { 
    return typeof obj.price != 'string' ? sum += obj.price: sum;
  }, 0);

  console.log(sumProductsPrice);

  //Exercise 3
  // Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

  const categorizeCountries = () => {
    // let _countries = countries.filter(country => {
    //     return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");// })
    return countries.filter(country => {
       return country.match(/land|ia|island|stan/gi); 
    })
    //return _countries;
}
console.table(categorizeCountries());

//Exercise 4
// Create a function which returns an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// The number of times the letter starts a country in the array of countries

b = () => {return countries.map(x => `The letter is: ${x[0]} & count is ${x.length}`)};
 
console.table(b())

//Exercise 5
// Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array.

const getFirstTenCountries = () => {
    return countries.slice(0,10);
  }

  console.table(getFirstTenCountries());

//Exercise 6
// Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.

const getLastTenCountries = () => {
  return countries.slice(countries.length - 10,countries.length);
}

console.table(getLastTenCountries());

//Exercise 7
// Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

maxInitialLetter = () =>  {return countries.map((e) => {
  e.length
})}

console.log(maxInitialLetter());