const { DataTypes } = require('sequelize');

const userConfig = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 
};

const User = (sequelize) => {
    const userCreate = sequelize.define('User', {
      userConfig,
    }, {
        tableName: 'Users',
    });

    userCreate.associate = (models) => {
        userCreate.hasMany(models.BlogPosts, { foreingKey: 'id', as: 'posts' });
    };
      return userCreate;
  };
  
  module.exports = User;