// REQUIREMENTS

// express-validator
const {body} = require('express-validator');

// bcrypt
const bcrypt = require('bcryptjs');

// user list
const { readUsers } = require('../service/read');
const userList = readUsers();


// MIDDLEWARE

// post login
const postLoginMiddle = [
  body('email').trim().notEmpty().withMessage('Introduzca su email').isEmail().withMessage('No es un email válido')
  .custom(value => {  
    userList.forEach(element => {
      
      if (value == element.email) {
        const userSelected = element;
        module.exports = userSelected;
      }
    });    
    const userSelected = require('./login');
    if (value != userSelected.email) {
      throw new Error(`${value} no es un usuario registrado`);
    };    
    return true;
  }),
  body('password').trim().notEmpty().withMessage('Introduzca su contraseña')
  .custom(value => {
    const userSelected = require('./login');    
    const coincide = bcrypt.compareSync(value, userSelected.hash);

    if (!coincide) {
      throw new Error('Contraseña incorrecta');
    }
    else {
      return true;
    }
  })
];


// EXPORTS
module.exports = postLoginMiddle;