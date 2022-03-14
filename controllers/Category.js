const { Category } = require('../sequelize/models');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name || name === '') {
            return res.status(400).json({ message: '"name" is required' });
        }
        const categoryCreated = await Category.create({ name });

        return res.status(201).json(categoryCreated);
    } catch (err) {
        next(err);
    }
};

const listCategory = async (_req, res, next) => {
    try {
      const categories = await Category.findAll();
  
      return res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
  };

module.exports = {
    createCategory,
    listCategory,
};