// REQUIREMENTS

// express-validator
const {body} = require('express-validator');

// bcrypt
const bcrypt = require('bcryptjs');

// user list
const { readUsers } = require('../service/read');
const userList = readUsers();


// MIDDLEWARE

// post register
const postRegisterMiddle = [
  body('name').trim().notEmpty().withMessage('Introduzca su nombre'),
  body('password').trim().notEmpty().withMessage('Introduzca una contraseña'),
  body('email').trim().notEmpty().withMessage('Introduzca su email').isEmail().withMessage('No es un email válido')
  .custom(value => {
    const userList = readUsers();
    const userSelected = userList.filter(element => element.email == value);    
    
    if (userSelected[0]) {
      throw new Error(`${value} ya está registrado!`);
    };    
    return true;
  })
];

// EXPORTS
module.exports = postRegisterMiddle;