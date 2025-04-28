const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Nós' });
});

module.exports = router;
