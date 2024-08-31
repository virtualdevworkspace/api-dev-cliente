const pool = require('../config/db');

const createClientes = async (clientes) => {
  // Verifica si hay clientes en el array
  if (!clientes.length) {
    throw new Error('No hay clientes para insertar');
  }

  // Construye el string de valores para el query
  const values = clientes.flatMap(cliente => [
    cliente.id_original, cliente.nombre, cliente.apellido_paterno, cliente.apellido_materno, cliente.rfc, cliente.curp, cliente.fecha_nacimiento,
    cliente.genero, cliente.nacionalidad, cliente.pais_nacimiento, cliente.estado_nacimiento, cliente.ciudad_nacimiento,
    cliente.ocupacion, cliente.calle_domicilio, cliente.numero_domicilio, cliente.pais_domicilio, cliente.estado_domicilio,
    cliente.ciudad_domicilio, cliente.colonia_domicilio, cliente.estatus, cliente.fecha_ingreso
  ]);

  // Construye la consulta SQL con placeholders
  const query = `
    INSERT INTO dev_cliente (
      id_original, nombre, apellido_paterno, apellido_materno, rfc, curp, fecha_nacimiento,
      genero, nacionalidad, pais_nacimiento, estado_nacimiento, ciudad_nacimiento,
      ocupacion, calle_domicilio, numero_domicilio, pais_domicilio, estado_domicilio,
      ciudad_domicilio, colonia_domicilio, estatus, fecha_ingreso
    ) VALUES ${clientes.map((_, i) => `(${i * 21 + 1}, ${i * 21 + 2}, ${i * 21 + 3}, ${i * 21 + 4}, ${i * 21 + 5}, ${i * 21 + 6}, ${i * 21 + 7}, ${i * 21 + 8}, ${i * 21 + 9}, ${i * 21 + 10}, ${i * 21 + 11}, ${i * 21 + 12}, ${i * 21 + 13}, ${i * 21 + 14}, ${i * 21 + 15}, ${i * 21 + 16}, ${i * 21 + 17}, ${i * 21 + 18}, ${i * 21 + 19}, ${i * 21 + 20}, ${i * 21 + 21})`).join(', ')}
    RETURNING *
  `;

  const result = await pool.query(query, values);
  return result.rows;
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
