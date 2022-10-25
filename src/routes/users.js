const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require("../controllers/loginController")
// const jwt = require("../middleware/jwt");

// crud de um unico usuario, onde podemos: 1- listar as informaçoes dele, 2- criar usuario, 3- atualizar dados do usuario, 4- deletar usuario
router.get('/all', userController.getAll);
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.post('/login', loginController.login)
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
