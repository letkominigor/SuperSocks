const {
  Model,
} = require('sequelize');
const sock = require('./sock');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Favorite, Purchase, Sock }) {
      User.hasMany(Favorite, { foreignKey: 'user_id' });
      User.hasMany(Purchase, { foreignKey: 'user_id' });
      User.belongsToMany(Sock, {
        through:
        Purchase,
        Favorite,
        foreignKey: 'user_id',
        otherKey: 'sock_id',
      });
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
