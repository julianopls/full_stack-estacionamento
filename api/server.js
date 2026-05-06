require('dotenv').config();
const express = require('express');
const cors = require("cors");

const veiculoRoutes = require('./src/routes/veiculoRoutes')
const estadiaRoutes = require('./src/routes/estadiaRoutes')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/veiculos', veiculoRoutes)
app.use('/estadias', estadiaRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
