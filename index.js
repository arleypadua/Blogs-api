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

app.post(
  '/categories',
  middlewares.authorizationToken,
  controllers.createCategory,
);

app.get(
  '/user',
  middlewares.authorizationToken,
  controllers.listUser,
);

app.get(
  '/categories',
  middlewares.authorizationToken,
  controllers.listCategory,
);

app.get(
  '/user/:id', 
  middlewares.authorizationToken, 
  controllers.getUserById,
);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
