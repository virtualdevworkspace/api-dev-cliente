const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');



require('dotenv').config();

app.use(express.json());
app.use('/clientes', clienteRoutes);

// Middleware de errores
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
