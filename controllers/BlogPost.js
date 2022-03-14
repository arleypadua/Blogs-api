const { BlogPost } = require('../sequelize/models');

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

module.exports = {
  createBlogPost,
}; 