//Exercise 1
let userAge = prompt('Enter your age', '');
let userAgeInt = parseInt(userAge);

let yearsRemaining = 18 - userAge;

userAge >= 18 
    ? alert(`You are ${userAge}. You are old enough to drive`) 
    : alert (`You are ${userAge}. You will be allowed to drive after ${yearsRemaining} years`);

/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback 
stating to  wait for the number of years he neds to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.
   
   Enter your age:15
   You are left with 3 years to drive.
   ```

1. Compare the values of myAge and yourAge using if … else. Based on the 
comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```
*/