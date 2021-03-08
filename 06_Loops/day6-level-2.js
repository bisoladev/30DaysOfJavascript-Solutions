//Exercise 1
/*let randChars = '';
for(let i = 0; i < 2; i++) {
 let random = Math.random().toString(36).substr(2, 5);
 randChars += random;
}
console.log(randChars);
*/

//Exercise 2
let random = Math.random().toString(16).substr(2,7);
for(let i = 0; i < 1; i++) {
    let hexChars = '#';
    hexChars += random;
    console.log(hexChars);
}

