const { BlogPost } = require('../sequelize/models');
const { Category } = require('../sequelize/models');
const { User } = require('../sequelize/models');

const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { id } = req.tokenData;

    const createPost = await BlogPost.create({ 
      title,
      content, 
      userId: id, 
      categoryIds, 
      published: JSON.stringify(new Date()), 
      updated: JSON.stringify(new Date()),
    });

    return res.status(201).json({ id: createPost.id, userId: id, title, content });
    } catch (err) {
    next(err);
  }
};

const listBlogPost = async (req, res, next) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlogPost,
  listBlogPost,
}; 