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

const generateColors = (format,n) => {
    if(format === 'hexa') {
        let allHexCodes = '123456789abcdef';
        let hexColorArr = [];
        
        for(let x = 1; x <= n; x++) {
            let hexChars = [];
            for (let i = 0; i < 6; i++) {
                hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
            }
            hexColorArr.push('#' + hexChars.join(''));
        }
        return console.log(hexColorArr);
    }   else if (format === 'rgb') {
            let colors = [];
            
            for (i = 0; i < n; i++) {
                colors[i] = "rgb";
                colors[i] += `(${ Math.floor(Math.random() * 255) },`;
                colors[i] += `${ Math.floor(Math.random() * 255) },`
                colors[i] += `${ Math.floor(Math.random() * 255) })`
            } 
            return console.log(colors);
    }
}

generateColors('hexa', 5);