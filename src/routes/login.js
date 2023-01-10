// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Middleware
const postLoginMiddle = require('../middleware/login');

// Controllers
const {getLoginController, postLoginController} = require('../controller/login');


// ROUTES

// get
router.get(
  '/login',
  getLoginController
);

// post
router.post(
  '/login',
  postLoginMiddle,
  postLoginController
);

// EXPORTS
module.exports = router;