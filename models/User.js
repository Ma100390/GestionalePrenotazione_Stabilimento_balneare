const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assicurati che il percorso sia corretto

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Altri campi dell'utente, come email, ruoli, ecc.
});

module.exports = User;
