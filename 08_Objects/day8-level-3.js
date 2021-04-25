//Exercise 1
// Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName: 'Bisola',
//   lastName: 'Onaolapo',

//   income: {
//     softwareDeveloper : 120000,
//     contentWriter : 60000
//   },

//   expenses: {
//     rent: 70000,
//     tuition: 40000,
//     feeding: 10000,
//     electricity: 5000,
//     others: 4000

//   },
//   totalIncome: function() {
//     let incomePerAnnum = 0;
//     for (const entry of Object.entries(personAccount.income)) {
//         incomePerAnnum = incomePerAnnum + entry[1];
//       }
//       return incomePerAnnum;
//   },

//   totalExpense: function() {
//     let expensePerAnnum = 0;
//     for (const entry of Object.entries(personAccount.expenses)) {
//         expensePerAnnum = expensePerAnnum + entry[1];
//       }
//       return expensePerAnnum;
//   },

//   addIncome: function() {
//     let totalIncomePerAnnum = this.totalIncome();
//     return totalIncomePerAnnum;
//   },

//   addExpense: function() {
//     let totalExpensePerAnnum = this.totalExpense();
//     return totalExpensePerAnnum;
//   },

//   accountInfo: function() {
//     let accountBalance = this.addIncome() - this.addExpense();
//     let accountInfo = 
//     `\tFirst Name: ${this.firstName} \n
//     Last Name: ${this.lastName} \n
//     Total Annual Income: ${this.addIncome()} \n
//     Total Annual Expense: ${this.addExpense()} \n
//     Account Balance: ${accountBalance}`;
//     return accountInfo;
//   }
// }
// console.log(personAccount.accountInfo());


const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];



//Exercise 2
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
// b. Create a function called signIn which allows user to sign in to the application  .

const validate = (text) => {
  //console.log(text);
  if (text == null || text == '') {
    return false;
  }
  return true;
}
const idGenerator = () => {
  let chars = "abcdefghiklmnopqrstuvwxyz";
  let id = [];

  for (let i = 0; i < 6; i++) {
    id.push(chars[Math.floor(Math.random() * chars.length)])
  }
  return id = id.join("");
}
console.log(idGenerator());
//console.log(id);

// const signUp = (userEmail, userName, password) => {

//   // Check inputs before doing anything
//   let check = (validate(userEmail) && validate(userName) && validate(password));
//   console.log("The value is: " +  check)
//   if(check){
//     // check that they don't have an existing account
//     for(let i = 0; i <= users.length - 1; i++){
//       if (users[i].username == userName && users[i].email == userEmail) {
//         return console.log("You already have an account!");
//       }      
//     }

//     //Add the user
//     //users
//     users.push({
//       _id: idGenerator(),
//       username: userName,
//       email: userEmail,
//       password: password,
//       createdAt: new Date(),
//       isLoggedIn: false
//     })
//     return
//   }
//   // input validation failed if we get here
//   return console.log("Your input has issues!")
// }


// // use all of them
// const usrEmail = prompt("Enter your email",);
// const usrName = prompt("Enter your username",);
// const pwd = prompt("Enter password",);

// signUp(usrEmail, usrName, pwd);
// console.table(users);

// //sign in
// let signIn = (mail, pswd) => {
//   for(const user of users) {
//      if(user.email == mail && user.password == pswd) {
//         user.isLoggedIn = true;
//         return 'You have been signed in!!';
//      }  
//   }
//   return 'Incorrect Email or password';
// }
// console.log(signIn('alex@alex.com', '123123'));
// console.table(users);

//Exercise 3
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product.
// b. Create a function called averageRating which calculate the average rating of a product. 

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// const rateProduct = (productName, rating) => {

//   let check = (validate(productName) && validate(rating));
//   if(check){
//     for (let i = 0; i<= products.length - 1; i++) {
//       if (productName == products[i].name) {
//         //console.log(products[i])
//         products[i].ratings.push({
//           userId: idGenerator(),
//           rate: rating
//         })
//         //console.log(products[i])
//         return console.log(`Successfully added, a new rating of ${rating} to ${productName}`)
//       }
//     }
//     return console.log("Product was not found!")
//   }
//   return console.log("Invalid productname or rating")
// }
// // products.forEach((item) => console.log(item));
// console.log(products);

// // const selectProduct = prompt('Enter product name',);
// // const userRating = prompt('Give product rating',);
// // const ratings = parseInt(userRating);
// rateProduct(selectProduct, ratings);

const averageRating = (productname) => {
  // validate the input
  if (validate(productname)) {

    for (let i = 0; i <= products.length - 1; i++) {

      if (productname == products[i].name) {
        //sum the product
        let sumofRating = 0;
        for (let j = 0; j <= products[i].ratings.length - 1; j++) {
          sumofRating += (products[i].ratings[j].rate)
        }
        // calculate the average
        let avg = sumofRating / products[i].ratings.length;
        return console.log(`The average rating of ${productname} is " ${avg}`)
      }

    }
    return console.log("Product Not Found")
  }
  return console.log("Invalid Input")
}

averageRating("mobile phone");

//Exercise 4
// Create a function called likeProduct. This function will help to like the product if it is not liked and remove like if it was liked.


