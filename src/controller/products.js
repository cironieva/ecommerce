// REQUIREMENTS

// model
const products = require('../../models').products;


// CONTROLLERS

// getAllProductsController
const getAllProductsController = (req, res) => {
  return products.findAll()
  .then(products => res.status(200).send(products))
  .catch(error => res.status(404).send(error));
  };

// getOneProductController
const getOneProductController = (req, res) => {
  const { id } = req.params;
  return products.findOne(
      { where : { id:id } }
  )
  .then(products => res.status(200).send(products))
  .catch(error => res.status(404).send(error));
};

// createProductController
const createProductController = (req, res) => {
  const { name, description, price, image } = req.body;
  return products.create({
      name: name,
      description: description,
      price: price,
      image: image
  })
  .then(products => res.status(201).send(products))
  .catch(error => res.status(500).json(error));
};

// updateProductController
const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image } = req.body;

  product = await products.findOne(
      { where: { id: id }}
  );
  

  if (!product) {
      return res.status(404).json({
          status: 'hubo un error',
          mesage: 'ese producto no se encuentra'
      });
  };

  return products.update(
      {
          name: name,
          description: description,
          price: price,
          image: image
      },{
          where: { id: id }
      }
  )
  .then(products => res.status(200).send(product))
  .catch(error => res.status(500).json(error));
};

// deleteOneProductController
const deleteOneProductController = async (req, res) => {
  const { id } = req.params;

  product = await products.findOne(
      { where: { id: id }}
  );
  

  if (!product) {
      return res.status(404).json({
          status: 'hubo un error',
          mesage: 'ese producto no se encuentra'
      })
  };

  return products.destroy({
      where: { id: id }
  })
  .then(products => res.status(200).send(product))
  .catch(error => res.status(500).json(error));
};

// EXPORTS
module.exports = {
  getAllProductsController,
  getOneProductController,
  createProductController,
  updateProductController,
  deleteOneProductController
};