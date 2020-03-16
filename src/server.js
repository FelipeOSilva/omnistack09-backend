const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
let userdb = 'omnistack09';
let passdb = 'omnistack09';

mongoose.connect(
  `mongodb+srv://${userdb}:${passdb}@omnistack09-td9oa.mongodb.net/omnistack09?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

//req.params = Acessar route params (para edição, delete)
//req.query = Acessar query params (para filtros)
//req.body = Acessar corpo da requisição (para criação e edição)
app.use(express.json());
app.use(routes);

app.listen(3333);
