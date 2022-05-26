const {
  Model,
} = require('sequelize');
const favorite = require('./favorite');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // /
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    //  * The `models/index` file will call this method automatically.
    //  */
    static associate({ Favorite, Purchased }) {
      User.hasMany(Favorite, { foreignKey: 'user_id' });
      User.hasMany(Purchased, { foreignKey: 'user_id' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    login: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    favorites: {
      type: DataTypes.TEXT,
    },
    purchased: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
