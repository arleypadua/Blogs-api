module.exports = (sequelize) => {
    const PostsCategorie = sequelize.define('PostsCategories', {},
      {
        tableName: 'PostsCategories',
      });
  
    PostsCategorie.associate = (models) => {
      models.BlogPost.belongsToMany(
        models.Category,
        { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategorie, as: 'categories' },
      );
  
      models.Category.belongsToMany(
        models.BlogPost,
        { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategorie, as: 'blogPosts' },
      );
    };
  
    return PostsCategorie;
  };