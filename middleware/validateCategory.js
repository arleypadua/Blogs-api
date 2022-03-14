const { Category } = require('../sequelize/models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  const listCategory = await Category.findAll();
  const categoriesIds = await listCategory.map((category) => category.id);
  const existCategories = await categoryIds.every((id) => categoriesIds.includes(id));

  if (!existCategories) {
        return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
}; 