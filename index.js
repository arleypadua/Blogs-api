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
  middlewares.validateLogin,
  middlewares.validatePassword,
  controllers.login,
);

app.post(
  '/categories',
  middlewares.authorizationToken,
  controllers.createCategory,
);

app.post(
  '/post',
  middlewares.authorizationToken,
  middlewares.validateBlogPost,
  middlewares.validateCategory,
  controllers.createBlogPost,
);

app.put(
  '/post/:id',
  middlewares.authorizationToken,
  middlewares.validateBlogPostUpdate,
  controllers.updateBlogPost,
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
  '/post',
  middlewares.authorizationToken,
  controllers.listBlogPost,
);

app.get(
  '/user/:id', 
  middlewares.authorizationToken, 
  controllers.getUserById,
);

app.get(
  '/post/:id', 
  middlewares.authorizationToken,
  controllers.getBlogPostById,
);

app.delete(
  '/post/:id', 
  middlewares.authorizationToken,
  controllers.deleteBlogPost,
);

app.delete(
  '/user/me', 
  middlewares.authorizationToken,
  controllers.deleteUser,
);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
