require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const controllers = require('./controllers');
const middlewares = require('./middleware');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.post(
  '/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  controllers.createUser,
);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
