const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb+srv://user:pass@mogodb', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota
app.use('/api', require("./src/routes"));

app.listen(3001);
