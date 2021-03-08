//Exercise 1
/*let randChars = '';
for(let i = 0; i < 2; i++) {
 let random = Math.random().toString(36).substr(2, 5);
 randChars += random;
}
console.log(randChars);


//Exercise 2
let random = Math.random().toString(16).substr(2,7);
for(let i = 0; i < 1; i++) {
    let hexChars = '#';
    hexChars += random;
    console.log(hexChars);
}

*/

//Exercise 3

for(let i = 0; i < 1; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
}

//Exercise 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newCountry = [];
for(let i = 0; i < countries.length; i++) {
    newCountry.push(countries[i].toUpperCase());
    console.log(newCountry);
}

//Exercise 5
const newCountry = [];
for(let i = 0; i < countries.length; i++) {
    newCountry.push(countries[i].length);
    console.log(newCountry);
}