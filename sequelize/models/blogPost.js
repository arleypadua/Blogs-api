const { DataTypes } = require('sequelize');

const blogPostConfig = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      updated: {
        allowNull: false,
        type: DataTypes.STRING,
      },
};

const BlogPost = (sequelize) => {
    const blogPost = sequelize.define('BlogPosts', {
         blogPostConfig,
    }, {
        tableName: 'BlogPost',
    });

    blogPost.associatem = (models) => {
        blogPost.belongsTo(models.Users, { foreingKey: 'id', as: 'userId' });
    };
    return blogPost;
  };
  
  module.exports = BlogPost;