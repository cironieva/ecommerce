// REQUIREMENTS

// express-validator
const {param} = require('express-validator');

// models
const products = require('../../models').products


// MIDDLEWARE

const productList = products.findAll();

// get detail product
const getDpMiddle = param('id').custom(value => {
  const productSelected = productList.filter(p => p.id == value)[0];
  
  

  if (!productSelected) {
    throw new Error(`404 Not Found`);
  };

  module.exports = {productSelected};
  return true;
});

// EXPORTS
module.exports = getDpMiddle;