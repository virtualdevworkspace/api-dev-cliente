require('dotenv').config();
const { Pool } = require('pg');

// Usa la variable DATABASE_URL si está disponible
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Desactivar la verificación de certificados si es necesario
  },
});

module.exports = pool;
