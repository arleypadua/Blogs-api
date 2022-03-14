const login = require('./Login');

const { 
    createCategory,
    listCategory,
} = require('./Category');

const { 
    getUserById,
    listUser,
    createUser,
    deleteUser,
 } = require('./User');

const { 
    createBlogPost,
    listBlogPost,
    getBlogPostById,
    deleteBlogPost,
} = require('./BlogPost');

module.exports = {
    createUser,
    login,
    listUser,
    getUserById,
    createCategory,
    listCategory,
    createBlogPost,
    listBlogPost,
    getBlogPostById,
    deleteBlogPost,
    deleteUser,
};