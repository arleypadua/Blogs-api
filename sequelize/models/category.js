const Category = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
    }, {
        tableName: 'Categories',
    });
  
    return category;
  };
  
  module.exports = Category;