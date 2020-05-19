const data = require('../src/app/config/server');

// const express = require('express');

// const home = require('./app/routes/home');
// const noticias = require('./app/routes/noticias');
// const noticia = require('./app/routes/noticia');

// const routes = express.Router();

// routes.get('/', home.index);
// routes.get('/noticias', noticias.index);
// routes.get('/noticia/:id', noticia.index);


data.listen(3333, () => 
{
    console.log("Está rodando!");
})