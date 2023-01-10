// REQUIREMENTS

// file system
const fs = require('fs');

// SERVICES

// Read user list
const readUsers = () => {
  const userList = fs.readFileSync(__dirname + '/../database/userList.json');
  return JSON.parse(userList);
};

// Read product list
const readProducts = () => {
  const productList = fs.readFileSync(__dirname + '/../database/productList.json');
  return JSON.parse(productList);
};

// EXPORTS
module.exports = {
  readUsers,
  readProducts
};