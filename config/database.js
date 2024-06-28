const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carica le variabili d'ambiente da .env file

// Ottieni le variabili d'ambiente
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// Crea una nuova istanza di Sequelize e passa i parametri di connessione
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql', // Specifica il dialetto del database (in questo caso, MySQL)
});

module.exports = sequelize;
