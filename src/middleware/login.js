// REQUIREMENTS

// express-validator
const {body} = require('express-validator');

// bcrypt
const bcrypt = require('bcryptjs');

// models
const users = require('../../models').users;

// MIDDLEWARE

// post login
const postLoginMiddle = [
  body('email').trim().notEmpty().withMessage('Introduzca su email').isEmail().withMessage('No es un email válido')
  .custom(async value => {
    const userSelected = await users.findOne(
      { where : { email: value} }
    );

    if (userSelected) {
      module.exports = {userSelected};
    }

    else {
      return Promise.reject();
    };
    
  }).withMessage('Email no registrado'),
  
  body('password').trim().notEmpty().withMessage('Introduzca su contraseña')
  .custom(async value => {
    const {userSelected} = require('./login');
    
    const coincide = bcrypt.compareSync(value, userSelected.hash);

    if (!coincide) {
      return Promise.reject();
    };
  }).withMessage('Contraseña incorrecta')
];


// EXPORTS
module.exports = postLoginMiddle;