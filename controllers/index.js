const login = require('./login');
const createCategory = require('./Category');
const { getUserById, listUser, createUser } = require('./User');

module.exports = {
    createUser,
    login,
    listUser,
    getUserById,
    createCategory,
};