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

    b_plus = " + "+b;
    c_plus = " + "+c;
    let currentResult = solveQuadEquation(a,b,c);

    document.querySelector(".results").style.display = "visible";
    document.querySelector(".x1").innerHTML = `${a}x2 + ${b < 0? - (b*-1) : b_plus}x ${c < 0? - (c*-1) : c_plus} = 0 : ${currentResult}`;

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