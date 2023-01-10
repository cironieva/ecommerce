// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Middleware
const postRegisterMiddle = require('../middleware/register');

// Controllers
const {getRegisterController, postRegisterController} = require('../controller/register');


// ROUTES

// get
router.get(
  '/register',
  getRegisterController
);

// post
router.post(
  '/register',
  postRegisterMiddle,
  postRegisterController
);

// EXPORTS
module.exports = router;