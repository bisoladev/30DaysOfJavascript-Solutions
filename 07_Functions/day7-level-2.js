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