const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authenticateApiKey = require('../middlewares/authMiddleware');

// Aplicar el middleware a las rutas que deben estar protegidas
router.post('/', authenticateApiKey, clienteController.createClientes);
router.get('/', authenticateApiKey, clienteController.getClientes);
router.get('/:id_original', authenticateApiKey, clienteController.getClienteById);
router.put('/:id_original', authenticateApiKey, clienteController.updateCliente);
router.delete('/:id_original', authenticateApiKey, clienteController.deleteCliente);

module.exports = router;
