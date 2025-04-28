const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', { title: 'Página Inicial' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Nós' });
});


router.get('/profile', (req, res) => {
    res.render('profile', { title: 'PERFIL' });
  });
module.exports = router;
