// REQUIREMENTS

// models
const users = require('../../models').users;

// express-validator
const {body} = require('express-validator');


// MIDDLEWARE

// post register
const postRegisterMiddle = [
  body('name').trim().notEmpty().withMessage('Introduzca su nombre'),
  body('password').trim().notEmpty().withMessage('Introduzca una contraseña'),
  body('email').trim().notEmpty().withMessage('Introduzca su email').isEmail().withMessage('No es un email válido')
  .custom(async value => {
    const userSelected = await users.findOne(
      { where : { email: value} }
    );

    if (userSelected !== null) {
      return Promise.reject();
    };
    
}).withMessage('Ese email ya está registrado!')
];

// EXPORTS
module.exports = postRegisterMiddle;