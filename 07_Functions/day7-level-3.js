//Exercise 1
// Modify question number n . Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

let userIdGeneratedByUser = () => {
  let len = parseInt(prompt("Enter length of ID: "));
  let idCount = parseInt(prompt("Enter no of IDs: "));
  let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
  
  let allID = [];
  for(let x=1; x<=idCount; x++) {
    let rands = [];
    for (let i = 1; i <= len; i++) {
       rands.push(alphanums[Math.floor(Math.random() * alphanums.length) - 1]);
    } 
    allID.push(rands.join(''));
  } 
  return allID;
} 
console.log(userIdGeneratedByUser());

      