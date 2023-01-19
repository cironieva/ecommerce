// REQUIREMENTS

// models
const users = require('../../models').users;


// SERVICES

// post register service
const postRegisterService = (name, email, hash) => {
  return users.create({
    name,
    email,
    hash
  });
};

// EXPORTS
module.exports = postRegisterService;