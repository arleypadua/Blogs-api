require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');

const middlewares = require('./middleware');
const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/user', routes.userRouter);
app.use('/login', routes.loginRouter);
app.use('/categories', routes.categoriesRouter);
app.use('/post', routes.blogPostsRouter);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
