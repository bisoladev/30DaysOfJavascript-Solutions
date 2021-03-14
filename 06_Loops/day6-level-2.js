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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

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

//Exercise 3

for(let i = 0; i < 1; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
}

//Exercise 4
const newCountry = [];
for(const country of countries) {
    newCountry.push(country.toUpperCase());
    console.log(newCountry);
}


//Exercise 5
const countryLength = [];
for(const country of countries) {
    countryLength.push(country.length);
    console.log(countryLength);
} 

//Exercise 6
const countryArray = [];
for(const country of countries) {
    let abbrv= country.slice(0,3).toUpperCase();
    let lengthOf = country.length;
    countryArray.push([country, abbrv, lengthOf]);
}

for(arr of countryArray) {
    console.log(arr);
}

//Exercise 7
  let noCountry = true;
  let landCountriesList = [];
  
  for(const i of countries) {
     if(i.includes('land')) {
        landCountriesList.push([i]);
        noCountry = false;
     }
  } 
  if(noCountry) {
     console.log("All these countries are without land");
  } else {
    for(const country of landCountriesList) 
       console.log(country);
 }

 //Exercise 8
  let countryWithoutIA = true;
  let iaCountriesList = [];
  
  for(const i of countries) {
     if(i.endsWith('ia')) {
        iaCountriesList.push([i]);
        countryWithoutIA = false;
     }
  } 
  if(countryWithoutIA) {
     console.log("All these countries end without ia");
  } else {
    for(const country of iaCountriesList) 
       console.log(country);
 }
   

 //Exercise 9
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} 
console.log(maxLenCountry);

//Exercise 10
const countryWithFiveArr = [];

for(const country of countries) {
  if(country.length == 5) {
    countryWithFiveArr.push(country)
  } else {
    continue;
  }
}

console.log(countryWithFiveArr);


//Exercise 11
let longestTechLength = 0;
let longestTechStr;

for (tech of webTechs) {
  if (tech.length > longestTechLength) {
    longestTechLength = tech.length;
    longestTechStr = tech;
  }
}
console.log(longestTechStr);



//Exercise 12
webTechsArr = [];
for(tech of webTechs) {
  techUppCase = tech.toUpperCase();
  techLength =tech.length;
  webTechsArr.push([techUppCase, techLength]);
}

console.log(webTechsArr);

//Exercise 13

const mernAcro = [];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for(mern of mernStack) {
  mernAcro.push(mern.slice(0,1));
}

console.log(mernAcro);
*/



