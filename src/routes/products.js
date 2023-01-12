// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Controllers
const {
  getAllProductsController,
  getOneProductController,
  createProductController,
  updateProductController,
  deleteOneProductController
} = require('../controller/products');


// ROUTES

// getAll
router.get(
  '/products',
  getAllProductsController
);

// getOne
router.get(
  '/products/:id',
  getOneProductController
);

// create
router.post(
  '/products',
  createProductController
);

// update
router.put(
  '/products/:id',
  updateProductController
);

// deleteOne
router.delete(
  '/products/:id',
  deleteOneProductController
);


// EXPORTS
module.exports = router;