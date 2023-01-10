// REQUIREMENTS

// express-validator
const {validationResult} = require('express-validator');


// CONTROLLERS

// GET detail-product
const getDpController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors.array()[0].msg;
    res.render('errors', {css: 'error', title: 'Error', error});
  } else {
    
    const {productSelected} = require('../middleware/detail-product');
    
    console.log('productSelected', productSelected);

    const name = productSelected.name;
    const description = productSelected.description;
    const price = productSelected.price;

    res.render('detail-product', { css: 'detail-product', title: 'Detail Product', name, description, price});
  
  };
};

module.exports = {
  getDpController
};