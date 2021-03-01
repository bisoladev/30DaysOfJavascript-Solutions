//Exercise 1
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




