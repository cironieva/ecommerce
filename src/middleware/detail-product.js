// REQUIREMENTS

// express-validator
const {param} = require('express-validator');

// user list
const { readProducts } = require('../service/read');
const productList = readProducts();


// MIDDLEWARE

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