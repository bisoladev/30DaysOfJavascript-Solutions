//Exercise 1
// Create an empty object called dog



//Exercise 2
//Print the the dog object on the console



//Exercise 3
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
const dog = {
  name: 'Nala',
  legs: 4,
  color: 'white',
  age: 3,
  sound: 'woof woof!',
  bark: function() {
    let nalaBark = `${this.sound}`
    return nalaBark;
  }
}

console.log(dog.bark());

//Exercise 4
// Get name, legs, color, age and bark value from the dog object

const dogValues = Object.values(dog);
console.log(dogValues);

//Exercise 5
// Set new properties in the dog object: breed, getDogInfo

dog.breed = 'Maltese dog'
dog.getDogInfo = function () {
  let bark = this.bark();
  let myDogInfo = `The name of my dog is ${this.name}, she is ${this.color} in color, she is a ${this.breed} and has ${this.legs} legs, when she sees me, she barks ${bark}, she is ${this.age} years old`;
  return myDogInfo;
}

console.log(dog);
console.log(dog.getDogInfo());

//Level 1 completed

