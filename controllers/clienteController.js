// controllers/clienteController.js
const clienteModel = require('../models/clienteModel');

const createCliente = async (req, res) => {
  try {
    const clientes = req.body; // Suponiendo que `req.body` es un array de clientes
    
    if (!Array.isArray(clientes) || clientes.length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un array no vacío de clientes' });
    }

    // Puedes agregar validaciones adicionales aquí si es necesario

    const result = await clienteModel.createClientes(clientes);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error al insertar clientes:', error.message);
    res.status(500).json({ error: 'Error al insertar clientes' });
  }
};

const getClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.getClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error.message);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

const getClienteById = async (req, res) => {
  try {
    const cliente = await clienteModel.getClienteById(req.params.id_original);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener cliente:', error.message);
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
};

const updateCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.updateCliente(req.params.id_original, req.body);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar cliente:', error.message);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.deleteCliente(req.params.id_original);
    if (cliente) {
      res.status(200).json({ message: 'Cliente eliminado' });
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar cliente:', error.message);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};
