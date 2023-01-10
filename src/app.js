// REQUIREMENTS

// express
const express = require('express');
const app = express();

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// express-session
let session = require('express-session');
const mins15 = 1000 * 60 * 15;
app.use(session({
  secret: '123456',
  saveUninitialized: true,
  cookie: {maxAge: mins15},
  resave: false
}));


// SERVER INIT
const PORT = 3000;
app.listen(PORT, console.log('Server on port:', PORT));


// STATIC FILES
app.use(express.static(__dirname + '/../public'));

// SET VIEWS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// ROUTING

// Cart
app.use(require('./routes/cart'));

// Detail Product
app.use(require('./routes/detail-product'));

// Home
app.use(require('./routes/index'));

// Login
app.use(require('./routes/login'));

// Register
app.use(require('./routes/register'));