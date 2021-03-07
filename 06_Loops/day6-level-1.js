/*//Exercise 1
//for-loop
for (i = 0; i < 11; i++) {
    console.log(i);
}

//while loop
let u = 0
while (u <= 10 ) {
  console.log(u)
  u++
}

//do - while loop
let x = 0
do {
  console.log(x)
  x++
} while (x <= 10)

//Exercise 2
for (i = 10; i >= 0; i--) {
    console.log(i);
}

//while loop
let w = 10
while (w >= 0 ) {
  console.log(w)
  w--
}

//do - while loop
let y = 10
do {
  console.log(y)
  y--
} while (y >= 0)

//Exercise 3
let n = 5;
for(i = 0; i <= n; i++) {
    console.log(i);
}

//Exercise 4
for(i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
 }

 const hash = ['#', '#', '#', '#', '#', '#', '#']
const newArr = []
for(let i = 0; i < hash.length; i++){
  newArr.push(hash[i])
  console.log(newArr.toString());
}

let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

//Exercise 5
for(i=0; i <=10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//Exercise 6
for(i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

//Exercise 7
for(i = 0; i <= 100; i=i + 2) {
  console.log(i);
}

//Exercise 8 
for(i = 1; i <=100; i = i + 2) {
  console.log(i);
}

//Exercise 9
for (let i = 0; i<= 100; i++) {

  let notAPrimeNo = false;
  for (let j = 2; j <= i; j++) {
      if (i%j==0 && j!==i) {
          notAPrimeNo = true;
      }
  }
  if (i < 2) {
      continue;
  } else if (!notAPrimeNo) {
    console.log(i);
  }
}

//Exercise 10
let x = 0;
for(let i = 0; i <=100; i++){
  console.log(i);
  x = x + i;
  console.log(x);
}

//Exercise 11 
for(let i = 0; i <=100; i++){
   let b = 0;
  for(let j = 2; j <=i; j=j+2) {
    b = b + j;
  }
    let c = 0;
  for(let k = 1; k <=i; k=k+2) {
    c = c + k;
  }
  console.log(`The sum of even numbers is ${b}`);
  console.log(`The sum of odd numbers is ${c}`);
}

//Exercise 12 
for(let i = 0; i <=100; i++){
  const arr = [];
  let b = 0;
 for(let j = 2; j <=i; j=j+2) {
   b = b + j;
 }
   let c = 0;
 for(let k = 1; k <=i; k=k+2) {
   c = c + k;
 }
  arr.push(b,c);
  console.log (arr);
}
*/

//Exercise 13
let randomNums = [];
for (let i = 0; i < 5; i++) {
   randomNums.push(Math.floor(Math.random() * 100));
   console.log(randomNums);
}

//Exercise 14
let uniqueRandomNums = [];
for (let i = 0; i < 5; i++) {
   let random = Math.floor(Math.PI * Math.random() * 100);
   if(uniqueRandomNums.indexOf(random) === -1) {
     uniqueRandomNums.push(random);
   }
   console.log(uniqueRandomNums);
}

//Exercise 15
