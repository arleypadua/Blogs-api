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
      published: new Date(), 
      updated: new Date(),
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
        { model: User, as: 'user', attributes: { exlude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const postId = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exlude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    if (!postId) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(postId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlogPost,
  listBlogPost,
  getBlogPostById,
}; 