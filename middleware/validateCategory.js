const { Category } = require('../sequelize/models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  // com poucas categorias no banco de dados, carregar todas as categorias do banco de dados com o findAll não seria um problema tão grande
  // se fosse o caso de ter muitas categorias no banco de dados, junto com muitas requisições chegando no backend, poderia sobrecarregar o banco de dados e o backend (o servidor pode até cair)
  // o ideal seria carregar apenas as categorias que estão sendo passadas no body da requisição, para que seja feita a validação:
  
  // a validação que você tem poderia ser substituída por:
  const existingCategories = await Category.findAll({ where: { id: categoryIds } });
  if (!existingCategories || existingCategories.length !== categoryIds.length) {
     return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
}; 