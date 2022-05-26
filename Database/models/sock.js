const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ Favorite, Purchase, User }) {
      Sock.hasMany(Favorite, { foreignKey: 'sock_id' });
      Sock.hasMany(Purchase, { foreignKey: 'sock_id' });
      Sock.belongsToMany(User, {
        through:
        Purchase,
        Favorite,
        foreignKey: 'sock_id',
        otherKey: 'user_id',
      });
    }
  }
  Sock.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    color: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    picture: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    pattern: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Socks',
        key: 'id',
      },
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
    modelName: 'Sock',

  });
  return Sock;
};
