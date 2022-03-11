require('dotenv').config();

const PORT = process.env.PORT || 8080;

const express = require('express');

const app = express();

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
