var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// crud de um unico usuario, onde podemos: 1- listar as informaçoes dele, 2- criar usuario, 3- atualizar dados do usuario, 4- deletar usuario
router.get('/:id')
router.post('/login')
router.patch('/:id')
router.delete('/:id')

module.exports = router;
