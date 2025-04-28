const express = require('express');
const path = require('path');

const app = express();
const routes = require('./routes/index');

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Usar as rotas
app.use('/', routes);

// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
