const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favorite }) {
      // define association here
      Sock.hasMany(Favorite, { foreignKey: 'sock_id' });
      Sock.belongsToMany(User, {
        through: 'sock_id',
        otherKey: 'user_id',
      });
    }
  }
  Sock.init({
    color: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    pattern: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    picture: {
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
    modelName: 'Sock',
    tableName: 'Socks',
  });
  return Sock;
};
