const pool = require('../config/db');

const createCliente = async (cliente) => {
  const {
    id_original, nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
    genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
    ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
    ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso
  } = cliente;
  
  const result = await pool.query(
    `INSERT INTO dev_cliente (
    id_original, nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
    genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
    ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
    ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
    RETURNING *`,
    [ id_original, nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
      genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
      ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
      ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso]
  );
  return result.rows[0];
};

const getClientes = async () => {
  const result = await pool.query('SELECT * FROM dev_cliente');
  return result.rows;
};

const getClienteById = async (id_original) => {
  const result = await pool.query('SELECT * FROM dev_cliente WHERE id_original = $1', [id_original]);
  return result.rows[0];
};

const updateCliente = async (id_original, cliente) => {
  const {
    nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
    genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
    ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
    ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso
  } = cliente;

  const result = await pool.query(
    `UPDATE dev_cliente SET
    nombre= $1, apellido_paterno= $2, apellido_materno= $3, rfc= $4, curp= $5, fecha_nacimiento= $6,
    genero= $7, nacionalidad= $8, pais_nacimiento= $9, estado_nacimiento= $10, ciudad_nacimiento= $11,
    ocupacion= $12, calle_domicilio= $13, numero_domicilio= $14, pais_domicilio= $15, estado_domicilio= $16,
    ciudad_domicilio= $17, colonia_domicilio= $18, estatus= $19, fecha_ingreso= $20
    WHERE id_original = $21
    RETURNING *`,
    [ nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
      genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
      ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
      ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso, id_original]
  );
  return result.rows[0];
};

const deleteCliente = async (id_original) => {
  const result = await pool.query('DELETE FROM dev_cliente WHERE id_original = $1 RETURNING *', [id_original]);
  return result.rows[0];
};

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};
