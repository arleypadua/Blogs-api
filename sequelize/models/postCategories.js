module.exports = (sequelize) => {
    const PostsCategorie = sequelize.define('PostsCategories', {},
      {
        tableName: 'PostsCategories',
      });
  
    PostsCategorie.associate = (models) => {
      models.BlogPost.belongsToMany(
        models.Category,
        { foreignKey: 'id', otherKey: 'postId', through: PostsCategorie, as: 'postId' },
      );
  
      models.Category.belongsToMany(
        models.BlogPost,
        { foreignKey: 'id', otherKey: 'categori', through: PostsCategorie, as: 'categoryId' },
      );
    };
  
    return PostsCategorie;
  };