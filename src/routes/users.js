const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require("../controllers/loginController")
const jwt = require("../middleware/jwt");

// crud de um unico usuario, onde podemos: 1- listar as informaçoes dele, 2- criar usuario, 3- atualizar dados do usuario, 4- deletar usuario
router.get('/all', jwt.auth, userController.getAll);
router.get('/:id', jwt.auth, userController.getUserById);
router.post('/create', jwt.auth, userController.createUser);
router.post('/login', jwt.auth, loginController.login)
router.put("/:id", jwt.auth, userController.updateUser);
router.delete('/:id', jwt.auth, userController.deleteUser);

module.exports = router;
