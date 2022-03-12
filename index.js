require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const controllers = require('./controllers');
const middlewares = require('./middleware');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post(
  '/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  controllers.createUser,
);

app.post(
  '/login',
  middlewares.validateEmail,
  middlewares.validatePassword,
  controllers.login,
);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
