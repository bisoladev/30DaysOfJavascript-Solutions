const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },


}

//Exercise 1
//Find the person who has many skills in the users object.

// let maxi = 0;
// let mostSkilledPerson;

// for (const entry of Object.entries(users)) {
//   if (entry[1].skills.length > maxi) {
//     maxi = entry[1].skills.length;
//     mostSkilledPerson = entry[0];
//   }
// }
// console.log(mostSkilledPerson);

// //Alternative solution
// let max = 0;
// let skilledPerson;

// for(const user of Object.keys(users)) {
//    if(users[user].skills.length > max) {
//       max = users[user].skills.length;
//       skilledPerson = Object.assign({}, users[user]);
//    }
// }
// console.log(skilledPerson.email, max); 

// //Alternative solution
// let winner;
// let highest = 0;

// for (const property in users) {
//     if (users[property].skills.length > highest) {
//         highest = users[property].skills.length;
//         winner = property
//     }
    
// }
// console.log(winner);

//Exercise 2
// Count logged in users,count users having greater than or equal to 50 points from the following object.

let loggedInUsers = 0;
usersGreater50Points = 0;

for (const entry of Object.entries(users)) {
  if (entry[1].isLoggedIn == true) {
    loggedInUsers = loggedInUsers + 1;
  }

  if(entry[1].points >= 50) {
    usersGreater50Points = usersGreater50Points + 1;
  }
}

console.log(loggedInUsers);
console.log(usersGreater50Points);

//Exercise 3
// Find people who are MERN stack developer from the users object.

  let mernStackDevelopers = [];
  for (const entry of Object.entries(users)) {
    if (entry[1].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
      mernStackDevelopers.push(entry[0]);
    }
  }

  console.log(mernStackDevelopers);

//Exercise 4
//Set your name in the users object without modifying the original users object.

const copyUsers = Object.assign({}, users);
copyUsers.myName = 'Bisola';
console.log(Object.entries(copyUsers));

//Exercise 5
console.log(Object.keys(users));
