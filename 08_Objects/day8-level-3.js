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
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  

//Exercise 2
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
// b. Create a function called signIn which allows user to sign in to the application  .
 
const signUp = (username, email, password) => {
  users.forEach(user => {
    let date = new Date()
          let chars = "abcdefghiklmnopqrstuvwxyz";
          let id = [];
          for (let i = 0; i < 6; i++) {
              id.push(chars[Math.floor(Math.random() * chars.length)])
          }
          id = id.join("");
      if (user.username === username && user.email === email) {
          return console.log("you already have an account");
          
      } else if (user.username !== username && user.email !== email){
           return users.push({
              _id: id,
              username: username,
              email: email,
              password: password,
              createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
              isLoggedIn: "false"
          })
      }
  })
}
users.forEach((x) => console.log(x));

signUp('Asab','asab@asab.com', '123456');

//sign in
let signIn = (mail, pswd) => {
  for(const user of users) {
     if(user.email == mail && user.password == pswd) {
        user.isLoggedIn = true;
        return 'You have been signed in!!';
     }  
  }
  return 'Incorrect Email or password';
}
console.log(signIn('alss@alex.com', '123123'));





