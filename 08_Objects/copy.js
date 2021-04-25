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

