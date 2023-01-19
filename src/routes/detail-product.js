// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Controllers
const {getDpController} = require('../controller/detail-product');



// ROUTES

// get
router.get(
  '/detail-product/:id',
  getDpController
);


// EXPORTS
module.exports = router;