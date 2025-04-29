const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.render('swipper', { title: 'Página Inicial'});
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/profile', (req, res) => {
  res.render('profile', { title: 'PERFIL' });
});

app.get('/chat', (req, res) => {
  res.render('chat.ejs', { title: 'CHAT' });
});

app.get('/mock.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/js/chatmock.json'));
});

// Rota para exibir o formulário de registro
app.get('/register', (req, res) => {
  res.render('register'); // Mostra o formulário
});

// Rota que recebe o formulário
app.post('/register', async (req, res) => {
  const { nome, email, senha, nascimento, genero, bio, idade, orientacao, genero_interesse, gostos } = req.body;

  try {
    const response = await axios.post('localhost:8000/api/register', {
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

    // Sucesso
    console.log(response.data);

    // Pode fazer redirect ou renderizar uma página de sucesso
    res.redirect('/login'); // ou qualquer página que você queira
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response ? error.response.data : error.message);

    // Pode exibir a página de registro novamente com erro
    res.render('register', { error: 'Erro ao registrar. Tente novamente.' });
  }
});

// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
