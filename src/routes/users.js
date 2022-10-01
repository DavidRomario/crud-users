const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// crud de um unico usuario, onde podemos: 1- listar as informaçoes dele, 2- criar usuario, 3- atualizar dados do usuario, 4- deletar usuario
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete('/:id');

module.exports = router;
