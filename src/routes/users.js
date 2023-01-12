// REQUIREMENTS

// Router
const {Router} = require('express');
const router = Router();

// Controllers
const {
  getAllUsersController,
  getOneUserController,
  createUserController,
  updateUserController,
  deleteOneUserController
} = require('../controller/users');


// ROUTES

// getAll
router.get(
  '/users',
  getAllUsersController
);

// getOne
router.get(
  '/users/:id',
  getOneUserController
);

// create
router.post(
  '/users',
  createUserController
);

// update
router.put(
  '/users/:id',
  updateUserController
);

// deleteOne
router.delete(
  '/users/:id',
  deleteOneUserController
);


// EXPORTS
module.exports = router;