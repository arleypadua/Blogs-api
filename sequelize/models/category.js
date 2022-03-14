const Category = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
    }, {
        tableName: 'Categories',
    });
  
    return category;
  };
  
  module.exports = Category;