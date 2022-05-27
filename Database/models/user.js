const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sock, Favorite, Purchase }) {
      // define association here
      User.hasMany(Favorite, { foreignKey: 'user_id' });
      User.belongsToMany(Sock, {
        through: Favorite,
        foreignKey: 'user_id',
        otherKey: 'sock_id',
      });
      User.hasMany(Purchase, { foreignKey: 'user_id' });
      User.belongsToMany(Sock, {
        through: Purchase,
        foreignKey: 'user_id',
        otherKey: 'sock_id',
      });
    }
  }
  User.init({
    login: {
      unique: true,
      allowNull: false,
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
    tableName: 'Users',
  });
  return User;
};
