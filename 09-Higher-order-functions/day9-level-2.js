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

//Method 1
const maxInitialLetter = countries.reduce((accumulator, current) => {
  accumulator[current[0]] = accumulator[current[0]] + 1 || 1;
  return accumulator;
}, {});

console.table(maxInitialLetter);

const daniel = (accumulator, current) => {
  accumulator[current[0]] = accumulator[current[0]] + 1 || 1
  console.log(accumulator[current[0]]);
  return accumulator;
};

console.log(daniel([], countries));

//Method 1a


//Method 2

// countriesMap is an empty object. This object will be used to hold the element and its occurrence count as a key-value pair.
// let countriesMap = {};
// let maxValue = 0;
// let maxCount = 0;

//   // iterate through the first letter of the countries array
// for (let country of countries[0]) {
//   //Check if the current element is on the map or not. If not, add this element as key and assign 1 as its value. This means this element occurs one time until now. Else, increment the current value.
//   if (countriesMap[country] == null) {
//     countriesMap[country] = 1;
//   } else {
//     countriesMap[country]++;
//   }

//   //5
//   if (countriesMap[country] > maxCount) {
//     maxValue = country;
//     maxCount = countriesMap[country];
//   }
// }

// // 6
// console.log(`Value : ${maxValue}, Count : ${maxCount}`);

// //Method 3
// // const maxValue = givenArray.reduce((previous, current, i, arr) => {
// //   if (
// //     arr.filter(item => item === previous).length >
// //     arr.filter(item => item === current).length
// //   ) {
// //     return previous;
// //   } else {
// //     return current;
// //   }
// // });

// // console.log(`Maximum occurrence value : ${maxValue}`);
// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x
// }, 0)

// console.log(sum)

arr = [1,2,3,4,5]
const summingReducer = function(accumulator, currentValue){
  return accumulator + currentValue;
}


const counter = (count, action) => {
  return count + 1;
};

//console.log(`The output is: ${counter(3)}`);


// // const counterReducer2 = (count, action) => {
// //   switch (action.type) {
// //     case 'INCREASE':
// //       return count + 1;
// //     case 'DECREASE':
// //       return count - 1;
// //     default:
// //       return count;
// //   }
// // };
// // console.log(`The output is: ${counterReducer2( 3, { type: 'INCREASE' })}`);

console.log(`The output is: ${summingReducer(3, 4)}`);

// console.log(`The output, which is the sum is: ${arr.reduce(summingReducer)}`);
// console.log("============= MAP FUNCTION ==============");

// const x = countries.map(y => y  + " is a country");

// console.log(x);
// console.log(countries);
// console.log("========================================");

// console.log("=========== ForEach =============");
// let kcountry = [];
// const y = countries.forEach(z => kcountry.push(z + " + is nonsense"));
// //console.log(y);
// console.log(kcountry);
// // countries.forEach(x => console.log(x));
// // console.log(x);

// // forEach() executes the callback function once for each array element; 
// // unlike map() or reduce() it always returns the value undefined and is not chainable. 
// // The typical use case is to execute side effects at the end of a chain.

// const items = ['item1', 'item2', 'item3']
// const copyItems = []
// const copyItems2 = []


// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems2.push(items[i])
// }

// // after
// items.forEach(function(item){
//   copyItems.push(item)
// })

// console.log(copyItems);
// console.log(copyItems2);

// let p = [];
// let n = () => {
//   for (let i = 0; i < items.length; i++) {
//     p = copyItems2.push(items[i])
//   }
//  return console.log(p);
// }

