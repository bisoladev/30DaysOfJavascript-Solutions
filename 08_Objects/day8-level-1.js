//Exercise 1
// Create an empty object called dog

const dog = {};

//Exercise 2
//Print the the dog object on the console

console.log(dog);

//Exercise 3
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_

dog.name = 'Furry';
dog.legs = 4;
dog.color = 'white';
dog.age = 3;
dog.bark = function() {
  return 'woof woof!';
}


