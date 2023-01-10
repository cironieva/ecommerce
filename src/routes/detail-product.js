// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Middleware
const getDpMiddle = require('../middleware/detail-product');

// Controllers
const {getDpController} = require('../controller/detail-product');



// ROUTES

// get
router.get(
  '/detail-product/:id',
  getDpMiddle,
  getDpController
);


// EXPORTS
module.exports = router;