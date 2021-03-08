//Exercise 1
let randChars = '';
for(let i = 0; i < 2; i++) {
 let random = Math.random().toString(36).substr(2, 5);
 randChars += random;
}
console.log(randChars);