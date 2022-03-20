const router = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middleware');

router.get(
    '/',
    middlewares.authorizationToken,
    controllers.listBlogPost,
);
  
router.get(
    '/search',
    middlewares.authorizationToken,
    controllers.searchBlogPost,
);
  
router.get(
    '/:id', 
    middlewares.authorizationToken,
    controllers.getBlogPostById,
);

router.post(
    '/',
    middlewares.authorizationToken,
    middlewares.validateBlogPost,
    middlewares.validateCategory,
    controllers.createBlogPost,
);
  
router.put(
    '/:id',
    middlewares.authorizationToken,
    middlewares.validateBlogPostUpdate,
    controllers.updateBlogPost,
);

router.delete(
    '/:id', 
    middlewares.authorizationToken,
    controllers.deleteBlogPost,
);

module.exports = router;