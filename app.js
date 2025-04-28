const express = require('express');
const path = require('path');

const app = express();

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
  res.render('login', { title: 'Página Inicial' });
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


// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
