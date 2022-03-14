const errorHandle = require('./errorHandle');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateLogin = require('./validateLogin');
const authorizationToken = require('./authorizationToken');
const validateBlogPost = require('./validateBlogPost');
const validateCategory = require('./validateCategory');

module.exports = {
    errorHandle,
    validateDisplayName,
    validateEmail,
    validatePassword,
    validateLogin,
    authorizationToken,
    validateBlogPost,
    validateCategory,
};
