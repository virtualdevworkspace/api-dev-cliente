// index.js
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const { Client } = require('pg'); // Importar el cliente PostgreSQL

// Crear una instancia del cliente PostgreSQL usando las variables de entorno
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // Si necesitas desactivar la verificación de certificados (no recomendado en producción)
  },
});

async function queryDatabase() {
  try {
    // Conectar al cliente
    await client.connect();
    console.log('Connected to the database');

    // Ejecutar la consulta
    const res = await client.query('SELECT version();');
    console.log('PostgreSQL version:', res.rows[0].version);

  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    // Cerrar la conexión
    await client.end();
  }
}

// Llamar a la función para ejecutar la consulta
queryDatabase();
