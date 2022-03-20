const router = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middleware');

router.post(
    '/',
    middlewares.validateLogin,
    middlewares.validatePassword,
    controllers.login,
);

module.exports = router;