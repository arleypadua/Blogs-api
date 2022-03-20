const router = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middleware');

router.get(
    '/',
    middlewares.authorizationToken,
    controllers.listCategory,
);

router.post(
    '/',
    middlewares.authorizationToken,
    controllers.createCategory,
);

module.exports = router;