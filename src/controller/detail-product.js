// REQUIREMENTS

// Models
const products = require('../../models').products;


// CONTROLLERS

// GET detail-product
const getDpController = (req, res) => {
  const parsear = (data) => JSON.parse(data);
  const {id} = req.params;

  return products.findOne(
    { where: { id: id } }
  )
  .then(data => JSON.stringify(data))
  .then(data => parsear(data))
  .then(data => res.render(
    'detail-product', { title: 'Detail-product' , data }
  ));
};

module.exports = {
  getDpController
};