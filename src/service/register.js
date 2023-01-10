// REQUIREMENTS

// file system
const fs = require('fs');

// user list
const { readUsers } = require('../service/read');
const userList = readUsers();


// SERVICES

// post login service
const postLoginService = (name, email, password) => {
  const newUser = {
    name,
    email,
    hash: password
  }
  userList.push(newUser);
  fs.writeFileSync(__dirname + '/../database/userList.json', JSON.stringify(userList));
};

// EXPORTS
module.exports = postLoginService;