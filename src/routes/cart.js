// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Controllers
const {getCartController} = require('../controller/cart');


// ROUTES

// get
router.get(
  '/cart',
  getCartController
);


// EXPORTS
module.exports = router;