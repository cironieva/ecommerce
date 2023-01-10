// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Controllers
const {getIndexController} = require('../controller/index');


// ROUTES

// get
router.get(
  '/',
  getIndexController
);


// EXPORTS
module.exports = router;