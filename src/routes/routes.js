const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/clientController');
const ItemController = require('../controllers/itemController');

router.get('/clientes', ClientController.all);
router.get('/cliente', ClientController.clientByID);
router.post('/cliente', ClientController.createClient);
router.put('/atualizar-cliente', ClientController.updateClient);

router.get('/itens', ItemController.all);
router.post('/cadastrar-item', ItemController.createItem);


module.exports = router;