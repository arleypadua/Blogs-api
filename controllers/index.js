const login = require('./login');
const { createCategory, listCategory } = require('./Category');
const { getUserById, listUser, createUser } = require('./User');

module.exports = {
    createUser,
    login,
    listUser,
    getUserById,
    createCategory,
    listCategory,
};