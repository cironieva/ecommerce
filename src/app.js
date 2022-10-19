// REQUERIR EXPRESS, DECLARAR APP Y PORT

const express = require('express');
const app = express();
const PORT = 3000;

// CREAR MENSAJE EN CONSOLA

app.listen(PORT, () => console.log('escuchando en el puerto', PORT));

// REQUERIR PATH

const path = require('path');

// HACER EL ROUTING DE CADA PAGINA

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, '../views/home/index.html'));
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login/login.html'));
});


app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register/register.html'));
});


app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/cart/cart.html'));
});


app.get('/detail-product', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/detail-product/detail-product.html'));
});