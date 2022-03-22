const { Op } = require('sequelize');
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

const updateBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.tokenData.id;

    const blogPost = await BlogPost.findByPk(id, {
      attributes: { exclude: ['id', 'published', 'updated'] },
      include: { model: Category, as: 'categories' },
    });

    if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });
    if (blogPost.userId !== userId) res.status(401).json({ message: 'Unauthorized user' });

    // parece que falta o valor do id no where
    await BlogPost.update({ title, content }, { where: { id: id } });

    return res.status(200).json({ 
      userId: blogPost.userId, title, content, categories: blogPost.categories });
  } catch (err) {
    next(err);
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

const deleteBlogPost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const blogPost = await BlogPost.findByPk(id);
      const userId = req.tokenData.id;

      if (!blogPost) {
        return res.status(404).json({ message: 'Post does not exist' });
      }

      if (blogPost.userId !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
      }

      await blogPost.destroy();

      return res.status(204).end();
    } catch (error) {
      next(error);
  }
};

const searchBlogPost = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) {
      const allPosts = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } }],
      });
      return res.status(200).json(allPosts);
    }
    const postToSearch = await BlogPost.findAll({
      where: { [Op.or]: [{ title: q }, { content: q }] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return res.status(200).json(postToSearch);
  } catch (error) { next(error); }
};

module.exports = {
  createBlogPost,
  listBlogPost,
  getBlogPostById,
  deleteBlogPost,
  updateBlogPost,
  searchBlogPost,
}; 