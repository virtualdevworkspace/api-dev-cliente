const clienteModel = require('../models/clienteModel');

/*
const createCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.createCliente(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};*/

const createClientes = async (req, res) => {
  try {
    // Obtén el arreglo de clientes del cuerpo de la solicitud
    const clientes = req.body;
    
    // Verifica si el cuerpo de la solicitud es un arreglo
    if (!Array.isArray(clientes)) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un arreglo de clientes' });
    }

    // Llama al método del modelo que maneja la inserción de múltiples clientes
    const result = await clienteModel.createClientes(clientes);
    
    // Responde con los clientes insertados
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear clientes' });
  }
};

const getClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.getClientes();
    res.status(200).json(clientes);
  } catch (error) {
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
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

module.exports = {
  createClientes,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};
