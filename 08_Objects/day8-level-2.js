//Exercise 1
/*Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_. */

// const solveLineEquation = (a,b,c) =>{ 
//   c = c * -1;
//   let x = (c / a).toFixed(1);
//   let y = (c / b).toFixed(1);
//   return `x = ${x}, when y = 0; and y = ${y} when x = 0`;
// }

// console.log(solveLineEquation(2,4,-5));

//Exercise 2
// Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

const results = document.getElementById("results");
const buttonAnswer = document.getElementById("button");
const xResult1 = document.getElementById("x1");
const xResult2 = document.getElementById("x2");


const solveQuadEquation = (a,b,c) => {
  let x1, x2;

  let discriminant = (b * b) - 4 * a * c;

  if (discriminant > 0) {
      x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
      x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);

      return `x1 = ${x1} and x2 = ${x2}`;
  }

  else if (discriminant == 0) {
      x1 = x2 = (-b / (2 * a)).toFixed(2);

      return `x1 = ${x1} and x2 = ${x2}`;
  }

  // if roots are not real
  else {
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

      // result
     return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  }


}

  buttonAnswer.addEventListener('click',() => {
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    
    c_plus = " + "+c;
    let currentResult = solveQuadEquation(a,b,c);

    document.querySelector(".x1").style.visibility = "visible";
    document.querySelector(".x1").innerHTML = `${a}x2 + ${b}x + ${c < 0? - (c*-1) : c_plus} = 0 : ${currentResult}`;

  }
  ) 

//Exercise 3
// Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.

// const printArray = (array) => {
//   for (const arr of array) {
//     console.log(arr);
//   }
// }

// printArray([1,2,3,4,5,6]);

//Exercise 4
// Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear(); // return year
  let month = now.getMonth() + 1; // return month(0 - 11)
  let date = now.getDate(); // return date (1 - 31)
  let hours = now.getHours(); // return number (0 - 23)
  let minutes = now.getMinutes(); // return number (0 -59)

  date = date < 10 ? '0' + date.toString(): date;
  month = month < 10 ? '0' + month.toString(): month;
  hours = hours < 10 ? '0' + hours.toString(): hours;
  minutes = minutes < 10 ? '0' + minutes.toString(): minutes;

  return console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
}

showDateTime();

//Exercise 5
// Declare a function name _swapValues_. This function swaps value of x to y.

const swapValues = (x,y) => {
  let m = x;
  x = y;
  y = m;
  return console.log(`x = ${x}, y = ${y}`);
}

swapValues(16,4);

//Exercise 6
// Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = (array) => {
  let newArray = [];
  for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}

reverseArray(['1','2','4','5','6']);

//Exercise 7
// Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (array) => {
  const newArr = [];
  for(arr of array) {
    newArr.push(arr.toUpperCase());
  }
  console.log(newArr);
}

capitalizeArray(['bisola', 'john', 'musa', 'rose']);

//Exercise 8 
// Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item.

const addItem = (item) => {
  itemArray = [];
  itemArray.push(item);
  console.log(itemArray);
}

addItem('mango');
addItem('monkey');

//Exercise 9
// Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item.

const removeItem = (index, array) => {
  const editedArray = [];
  editedArray.push(array.splice(index, 1));
  console.log(editedArray);
}

removeItem(0, ['apple', 'mango', 'orange','banana']);

//Exercise 10
// Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (minN, maxN) => {
  let sum = 0;
  for(let i = minN; i <= maxN; i++) {

    if (minN == 0 && maxN == 0) {
      sum = 0;
    } else {
      sum = i + sum;
    }
    
  }
  console.log(sum);
}

sumOfNumbers(0, 0);

//Exercise 11
// Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (minN, maxN) => {
  let sum = 0;
  for(let i = minN; i <= maxN; i++) {

    if (i % 2 !== 0) {
      sum = sum + i;
    } else if (i % 2 == 0) {
      continue;
    }
    console.log(sum);
    console.log(i);
  }
}

sumOfOdds(1, 7);

//Exercise 12
// Declare a function name _sumOfEven_. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfEven = (minN, maxN) => {
  let sum = 0;
  for(let i = minN; i <= maxN; i++) {

    if (i % 2 == 0) {
      sum = sum + i;
    } else if (i % 2 !== 0) {
      continue;
    }
    console.log(sum);
    console.log(i);
  }
  
}

sumOfEven(1, 5);

//Exercise 13
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (pNum) => {
  let nEven = 0;
  let nOdd = 0;
  for(let i = 0; i <= pNum; i++) {
    if (i % 2 == 0) {
      nEven++;
    } else if (i % 2 !== 0) {
      nOdd++; 
    }
  }
  console.log(`The number of even numbers is ${nEven} and the number of odd numbers is ${nOdd};`)
}
evensAndOdds(100);

//Exercise 14
// Write a function which takes any number of arguments and return the sum of the arguments.

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4));

//Exercise 15
// Write a function which generates a _randomUserIp_.

const randomUserIp = () => {
  let ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
console.log(ip)
}

randomUserIp();

//Exercise 16
// Write a function which generates a _randomMacAddress_
"XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
  return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
});

//Exercise 17
// Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

const randomHexaNumberGenerator = () => {
  let random = Math.random().toString(16).substr(2,6);
  for(let i = 0; i < 1; i++) {
      let hexChars = '#';
      hexChars += random;
      console.log(hexChars);
  }
}

randomHexaNumberGenerator();

//Exercise 18
// Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

const userIdGenerator = () => {
  let randomId = Math.random().toString(32).substr(2,7);
  randomId = randomId.toUpperCase();
  for(let i = 0; i < 1; i++) {
      let hexChars = '#';
      hexChars += randomId;
      console.log(hexChars);
  }
}

userIdGenerator();