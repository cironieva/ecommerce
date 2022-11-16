// REQUIREMENTS
const express = require('express');
const app = express();

// SERVER INIT
const PORT = 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

// STATIC FILES
app.use(express.static('public'));

// SET VIEWS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// ROUTING
const cart = require('./routes/cart');
app.use(cart);

const dp = require('./routes/detail-product');
app.use(dp);

const home = require('./routes/index');
app.use(home);

const login = require('./routes/login');
app.use(login);

const register = require('./routes/register');
app.use(register);



app.get('/prueba', (req, res) => {
  res.render('prueba');
});