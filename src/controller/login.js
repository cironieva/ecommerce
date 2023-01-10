// REQUIREMENTS

// express
const express = require('express');
const app = express();

// express-validator
const {validationResult} = require('express-validator');

// cookie-parser and express-sessions
const cookieParser = require('cookie-parser');
let session = require('express-session');

app.use(cookieParser());

const mins15 = 1000 * 60 * 15;
app.use(session({
  secret: '123456',
  saveUninitialized: true,
  cookie: {maxAge: mins15},
  resave: false
}));


// CONTROLLERS

// GET login
const getLoginController = (req, res) => {
  res.render('login', { css: 'login', title: 'Login'});
};

// POST login
const postLoginController = (req, res) => {
  const email = req.body.email;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = errors.array()[0].msg;
    res.render('errors', {css: 'error', title: 'Error', error});
  } else {
    res.cookie('mail', email, {maxAge: mins15});
    res.redirect('/');
  };
};

module.exports = {
  getLoginController,
  postLoginController
};