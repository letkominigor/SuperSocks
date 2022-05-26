const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Sock }) {
      Favorite.belongsTo(User, { foreignKey: 'user_id' });
      Favorite.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  Favorite.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    sock_id: {
      allowNull: false,
      type: DataTypes.INTEGER,

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
    modelName: 'Favorite',
    tableName: 'Favorites',
  });
  return Favorite;
};
