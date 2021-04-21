//Exercise 1
// Modify question number n . Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// let userIdGeneratedByUser = () => {
//   let len = parseInt(prompt("Enter length of ID: "));
//   let idCount = parseInt(prompt("Enter no of IDs: "));
//   let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
  
//   let allID = [];
//   for(let x=1; x<=idCount; x++) {
//     let rands = [];
//     for (let i = 1; i <= len; i++) {
//        rands.push(alphanums[Math.floor(Math.random() * alphanums.length) - 1]);
//     } 
//     allID.push(rands.join(''));
//   } 
  
//   return allID.toString();
// } 
// console.log(userIdGeneratedByUser());

//Exercise 3
// Write a function name _rgbColorGenerator_ and it generates rgb colors.

// const rgbColorGenerator = () => {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   let rgb = `rgb(${r}, ${g}, ${b})`;
//   return console.log(rgb);
// }

// rgbColorGenerator();

//Exercise 4
// Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
// const arrayOfHexaColors = () => {
//   let allHexCodes = '123456789abcdef';
//   let loopCount = parseInt(Math.random() * 50);
//   let hexColorArr = [];
  
//   for(let x=1; x<=loopCount; x++) {
//      let hexChars = [];
//      for (let i = 0; i < 6; i++) {
//         hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
//      }
//      hexColorArr.push('#' + hexChars.join(''));
//   }
//   return hexColorArr;
// } 
// console.log(arrayOfHexaColors());

//Exercise 5
// Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.

// const arrayOfRgbColors = () => {
//   let loopCount = parseInt(Math.random() * 10);
//   let colors = [];

//   for (i = 0; i < loopCount; i++) {
//     colors[i] = "rgb";
//     colors[i] += `(${ Math.floor(Math.random() * 255) },`;
//     colors[i] += `${ Math.floor(Math.random() * 255) },`
//     colors[i] += `${ Math.floor(Math.random() * 255) })`

//   }

//   return console.log(colors);
// }

// arrayOfRgbColors();

//Exercise 6
// Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }

// console.log(rgbToHex(0, 51, 255));

//Alternative solution
// function RGBToHex(r,g,b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1)
//     r = "0" + r;
//   if (g.length == 1)
//     g = "0" + g;
//   if (b.length == 1)
//     b = "0" + b;

//   return "#" + r + g + b;
// }

// fullColorHex(160,80,70);
//Exercise 7
// Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.


//1st solution
// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null;
// }

// console.log(hexToRgb("#eef333")); // "51";

//2nd solution
// function HEX2RGB (hex) {
//   "use strict";
//   if (hex.charAt(0) === '#') {
//       hex = hex.substr(1);
//   }
//   if ((hex.length < 2) || (hex.length > 6)) {
//       return false;
//   }
//   var values = hex.split(''),
//       r,
//       g,
//       b;

//   if (hex.length === 2) {
//       r = parseInt(values[0].toString() + values[1].toString(), 16);
//       g = r;
//       b = r;
//   } else if (hex.length === 3) {
//       r = parseInt(values[0].toString() + values[0].toString(), 16);
//       g = parseInt(values[1].toString() + values[1].toString(), 16);
//       b = parseInt(values[2].toString() + values[2].toString(), 16);
//   } else if (hex.length === 6) {
//       r = parseInt(values[0].toString() + values[1].toString(), 16);
//       g = parseInt(values[2].toString() + values[3].toString(), 16);
//       b = parseInt(values[4].toString() + values[5].toString(), 16);
//   } else {
//       return false;
//   }
//   return [r, g, b];
// }

// //3rd solution
// const RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;

// const hex2RGB = str => {
//   const [ , short, long ] = String(str).match(RGB_HEX) || [];

//   if (long) {
//     const value = Number.parseInt(long, 16);
//     return [ value >> 16, value >> 8 & 0xFF, value & 0xFF ];
//   } else if (short) {
//     return Array.from(short, s => Number.parseInt(s, 16)).map(n => (n << 4) | n);
//   }
// };

//Exercise 8
//Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

// const generateColors = (format,n) => {
//     if(format === 'hexa') {
//         let allHexCodes = '123456789abcdef';
//         let hexColorArr = [];
        
//         for(let x = 1; x <= n; x++) {
//             let hexChars = [];
//             for (let i = 0; i < 6; i++) {
//                 hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
//             }
//             hexColorArr.push('#' + hexChars.join(''));
//         }
//         return console.log(hexColorArr);
//     }   else if (format === 'rgb') {
//             let colors = [];
            
//             for (i = 0; i < n; i++) {
//                 colors[i] = "rgb";
//                 colors[i] += `(${ Math.floor(Math.random() * 255) },`;
//                 colors[i] += `${ Math.floor(Math.random() * 255) },`
//                 colors[i] += `${ Math.floor(Math.random() * 255) })`
//             } 
//             return console.log(colors);
//     }
// }

// generateColors('rgb', 3);

//Exercise 9
// Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// console.log(shuffleArray(['a','b','c','d','e','f']));

//Exercise 10
// Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number

// function factorial(num) {
//     return (num <= 1) ? 1 : num * factorial(num-1);
//  }
//  console.log(factorial(4));

 //Exercise 11
//  Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not

// const isEmpty = (p) => {
//     return (p) ? console.log('This parameter is not empty') : console.log('It is empty');
// }

// isEmpty(3);

//Exercise 12
// Call your function _sum_, it takes any number of arguments and it returns the sum.

// const sum = (...args) => {
//     
//     for (const element of args) {
//       sum += element
//     }
//     return sum
//   }
  
//   console.log(sum(1, 2, 3, 4, 2));

//Exercise 13
// Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(numbers){
    let arrayOfNonNumbers = numbers.filter(item => typeof(item) != "number");
    console.log(arrayOfNonNumbers);
    let sum = 0;
    for (num of numbers) {
        if(arrayOfNonNumbers.length == 0) {
            sum += num;
            console.log(sum);
        } else if(arrayOfNonNumbers.length > 0){
            sum = "Not all elements were numbers";
        }
    } 
    return sum;
  }

  console.log(sumOfArrayItems([1,2,3,4,5,6,7,8]));   

  const sumOfArrayValues = (array) => {
    let sum = 0;
    for (const arr of array) {
        if (typeof arr === "number") {
            sum += arr
        } else {
            sum = `it's a string`
        }
    }
    return sum;
}
console.log(sumOfArrayValues([1, 2, 3,'a']));

//Exercise 14
// Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function averageArr(numbers){
    let arrayOfNonNumbers = numbers.filter(item => typeof(item) != "number");
    console.log(arrayOfNonNumbers);
    let sum = 0;
    let average = 0;
    for (num of numbers) {
        if(arrayOfNonNumbers.length == 0) {
            sum += num;
            average = Math.round(sum/(numbers.length));
        } else if(arrayOfNonNumbers.length > 0){
            average = "Not all elements were numbers";
        }
    } 
    return average;
  }

  console.log(averageArr([1,2,3,4,5,6,7,8]));   

//Exercise 15
//Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.  

const modifyArray = (array) => {

    if (array.length >= 5) {
        array[4] = 'I am a relaxing Dev';
        return array;
    } else if (array.length < 5) {
        return 'Item not found';
    }
}

console.log(modifyArray([1,2,3,4,5]));