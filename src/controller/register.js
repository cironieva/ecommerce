// REQUIREMENTS

// express-validator
const {validationResult} = require('express-validator');

// bcrypt
const bcrypt = require('bcryptjs');

// service
const postRegisterService = require('../service/register');


// CONTROLLERS

// GET register
const getRegisterController = (req, res) => {
  res.render('register', { css: 'register', title: 'Register'});
};

// POST register
const postRegisterController = (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    
    const error = errors.array()[0].msg;
    res.render('errors', {css: 'error', title: 'Error', error});
  
  } else {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const {name, email} = req.body;

    postRegisterService(name, email, hash);
    
    res.redirect('/');
  };
};

module.exports = {
  getRegisterController,
  postRegisterController
}