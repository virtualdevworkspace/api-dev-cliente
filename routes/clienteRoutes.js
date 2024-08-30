const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.get('/:id_original', clienteController.getClienteById);
router.put('/:id_original', clienteController.updateCliente);
router.delete('/:id_original', clienteController.deleteCliente);

module.exports = router;
