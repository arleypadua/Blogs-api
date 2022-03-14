const { DataTypes } = require('sequelize');

const userConfig = {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
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
    const userCreate = sequelize.define('User', userConfig,
    {
      tableName: 'Users',
    });

    userCreate.associate = (models) => {
        userCreate.hasMany(models.BlogPost, { foreingKey: 'id', as: 'posts' });
    };
      return userCreate;
  };
  
  module.exports = User;