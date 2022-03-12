const errorHandle = require('./errorHandle');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const authorizationToken = require('./authorizationToken');

module.exports = {
    errorHandle,
    validateDisplayName,
    validateEmail,
    validatePassword,
    authorizationToken,
};
