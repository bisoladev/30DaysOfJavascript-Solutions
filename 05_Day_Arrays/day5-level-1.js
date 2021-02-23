//Exercise 1
const arr = [];

//Exercise 2
const namesOfFoods = ['rice', 'beans', 'pasta', 'veggies', 'fruits'];

//Exercise 3
console.log(namesOfFoods.length);

//Exercise 4
console.log(namesOfFoods[0]);
console.log(namesOfFoods[2]);
console.log(namesOfFoods[4]);

//Exercise 5
const mixedDataTypes = [1, false, 'cake', 'cute', 24, 5];
console.log(mixedDataTypes.length);

//Exercise 6
const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Exercise 7
console.log(itCompanies);

//Exercise 8
console.log(itCompanies.length);

//Exercise 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//Exercise 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//Exercise 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//Exercise 12
itCompanies.push('are big IT companies.');
console.log(itCompanies.join(', '));
console.log(itCompanies);

//Exercise 13
let index = itCompanies.indexOf('Amazon');

if(index != -1){
   console.log('This company does exist in the array')  
} else {
    console.log('This company does not exist in the array')
}

//Exercise 14
itCompanies.splice(7,1);
console.log(itCompanies);
itCompanies.splice(0,3);
console.log(itCompanies);

//Exercise 15
console.log(itCompanies.sort());

//Exercise 16
console.log(itCompanies.reverse());

//Exercise 17
const techCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(techCompanies.splice(0,3));
console.log(techCompanies);

//Exercise 18
console.log(techCompanies.slice(1,4));

//Exercise 19
const newTechCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(newTechCompanies.slice(3,4));
console.log(newTechCompanies);

//Exercise 20
console.log(newTechCompanies.splice(0,1));

//Exercise 21
console.log(newTechCompanies);
console.log(newTechCompanies.splice(2,1));

//Exercise 22
console.log(newTechCompanies.splice(4,1));

//Exercise 23
console.log(newTechCompanies.splice(0,4));
console.log(newTechCompanies);
