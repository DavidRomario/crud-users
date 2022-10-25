const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// crud de um unico produto, onde podemos: 1- listar as informaçoes dele, 2- criar produto, 3- atualizar dados do produto, 4- deletar produto
router.get('/all', productController.getAll);
router.get('/:id', productController.getProductById);
router.post('/create', productController.createProduct);
router.post('/createAll', productController.insertAllProducts);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
