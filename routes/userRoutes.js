const router = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middleware');

router.get(
    '/',
    middlewares.authorizationToken,
    controllers.listUser,
);
  
router.get(
    '/:id', 
    middlewares.authorizationToken, 
    controllers.getUserById,
);

router.post(
    '/',
    middlewares.validateDisplayName,
    middlewares.validateEmail,
    middlewares.validatePassword,
    controllers.createUser,
);

router.delete(
    '/me', 
    middlewares.authorizationToken,
    controllers.deleteUser,
);

module.exports = router;