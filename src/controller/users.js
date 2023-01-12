// REQUIREMENTS

// model
const users = require('../../models').users;

// bcrypt
const bcrypt = require('bcryptjs');


// CONTROLLERS

// getAllUsersController
const getAllUsersController = (req, res) => {
  return users.findAll()
  .then(users => res.status(200).send(users))
  .catch(error => res.status(404).send(error));
  };

// getOneUserController
const getOneUserController = (req, res) => {
  const { id } = req.params;
  return users.findOne(
      { where : { id:id } }
  )
  .then(users => res.status(200).send(users))
  .catch(error => res.status(404).send(error));
};

// createUserController
const createUserController = (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  
  
  return users.create({
      name: name,
      email: email,
      hash: hash
  })
  .then(users => res.status(201).send(users))
  .catch(error => res.status(500).json(error));
};

// updateUserController
const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  user = await users.findOne(
      { where: { id: id }}
  );
  

  if (!user) {
      return res.status(404).json({
          status: 'hubo un error',
          mesage: 'ese usuario no se encuentra'
      });
  };

  return users.update(
      {
          name: name,
          email: email,
          hash: hash
      },{
          where: { id: id }
      }
  )
  .then(users => res.status(200).send(user))
  .catch(error => res.status(500).json(error));
};

// deleteOneUserController
const deleteOneUserController = async (req, res) => {
  const { id } = req.params;

  user = await users.findOne(
      { where: { id: id }}
  );
  

  if (!user) {
      return res.status(404).json({
          status: 'hubo un error',
          mesage: 'ese user no se encuentra'
      })
  };

  return users.destroy({
      where: { id: id }
  })
  .then(users => res.status(200).send(user))
  .catch(error => res.status(500).json(error));
};

// EXPORTS
module.exports = {
  getAllUsersController,
  getOneUserController,
  createUserController,
  updateUserController,
  deleteOneUserController
};