const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const sequelize = require('./config/database'); // Importa la connessione al database
const cors = require('cors'); // Importa il modulo CORS
const User = require('./models/User'); // Importa il modello User
const bodyParser = require('body-parser');

const app = express(); // Crea un'app Express

// Configura le opzioni CORS
const corsOptions = {
  origin: 'http://localhost:4200', // Indica l'origine consentita
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifica i metodi consentiti
  credentials: true, // Consenti l'invio di cookie
  optionsSuccessStatus: 204 // Alcune versioni di browser richiedono 204
};

// Usa il middleware CORS con le opzioni configurate
app.use(cors(corsOptions));

// Usa il middleware per il parsing del corpo JSON
app.use(bodyParser.json());

// ... Altre configurazioni e middleware

// Definisci la route per la gestione del login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cerca l'utente nel database per il nome utente e la password forniti
    const user = await User.findOne({ where: { username, password } });

    if (user) {
      res.status(200).json({ username: user.username }); // Restituisci un oggetto JSON con il nome utente
    } else {
      res.status(401).json({ error: 'Autenticazione fallita' }); // Restituisci un errore di autenticazione
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Errore durante l\'autenticazione' });
  }
});

// Sincronizza i modelli Sequelize con il database e avvia il server Express.js
sequelize.sync({ force: false })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing Sequelize models:', err);
  });
