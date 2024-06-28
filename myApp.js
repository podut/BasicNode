const express = require('express');
const app = express();

// Definim ruta de bază '/' care va răspunde cu "Hello World"
app.get('/', (req, res) => {
  console.log('Hello World'); // Mesajul va fi afișat în consolă
  res.send('Hello World'); // Înapoiază "Hello World" către client (browser)
});

// Pornim serverul pe portul 3000
app.listen(3000, () => {
  console.log('Serverul este pornit pe portul 3000');
});
