const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const profileRoutes = require('./routes/profileController'); // <- Controller correto

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas principais
app.get('/', (req, res) => {
  res.render('login', { title: 'Página Inicial'});
});

app.post('/', (req, res) => {
  res.render('swipper', { title: 'Página Inicial' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Corrigido: usar app.use para o profileRoutes
app.use('/', profileRoutes);

app.get('/chat', (req, res) => {
  res.render('chat.ejs', { title: 'CHAT' });
});

app.get('/mock.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/js/chatmock.json'));
});

app.get('/main.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/css/main.css'));
});

// Registro
app.get('/register', (req, res) => {
  res.render('register'); // Exibe o formulário
});

app.post('/register', async (req, res) => {
  const { nome, email, senha, nascimento, genero, bio, idade, orientacao, genero_interesse, gostos } = req.body;

  try {
    const response = await axios.post('http://localhost:8000/api/register', { // Corrigido http://
      nome,
      email,
      senha,
      nascimento,
      genero,
      bio,
      idade,
      orientacao,
      genero_interesse,
      gostos
    });

    console.log(response.data);
    res.redirect('/login');
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response ? error.response.data : error.message);
    res.render('register', { error: 'Erro ao registrar. Tente novamente.' });
  }
});

// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
