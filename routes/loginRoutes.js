const router = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middleware');

router.post(
    '/',
    middlewares.validateLogin,
    // esse middleware valida se o valor da senha está válido (não é vazio, não é undefined, não é menor que 6 caracteres)
    // mas falta o principal, que seria validar se a senha bate com a do usuário no banco de dados
    // sem essa validação eu poderia passar qualquer email de um usuário existente e ter permissão de acessar a API
    middlewares.validatePassword,
    controllers.login,
);

module.exports = router;