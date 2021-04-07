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
let arrayOfHexaColors = () => {
  let allHexCodes = '123456789abcdef';
  let loopCount = parseInt(Math.random() * 50);
  let hexColorArr = [];
  
  for(let x=1; x<=loopCount; x++) {
     let hexChars = [];
     for (let i = 0; i < 6; i++) {
        hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
     }
     hexColorArr.push('#' + hexChars.join(''));
  }
  return hexColorArr;
} 
console.log(arrayOfHexaColors());

