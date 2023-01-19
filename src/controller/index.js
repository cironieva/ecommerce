// REQUIREMENTS

// Models
const products = require('../../models').products;


// CONTROLLERS

// GET index
const getIndexController = (req, res) => {
  const parsear = (data) => JSON.parse(data);
  
  return products.findAll()
  .then(data => JSON.stringify(data))
  .then(data => parsear(data))
  .then(data => res.render(
    'index', { css: 'index', title: 'STR Guitars' , data }
  ));
};

module.exports = {
  getIndexController
};