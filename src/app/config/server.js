// Felipe Melo Moura - 5° A 
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = express();

data.set('view engine', 'ejs');
data.set('views', './src/app/views');
data.use(cors());
data.use(bodyParser.urlencoded({extended:true}));


consign()
        .include('src/app/routes')
        .then('src/app/config/dbConnection.js')
        .then('src/app/models')
        .into(data);

const teste = data.src.app.models;

const pega = new teste.noticiasModel(data.src.app.config.dbConnection);

pega.getNoticias(data.src.app.config.dbConnection, function(err, resul)
        {
           console.log(resul);
        });

module.exports = data;