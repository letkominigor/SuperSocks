const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Purchased extends Model {
    static associate({ User }) {
      Purchased.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Purchased.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
    modelName: 'Purchased',
  });
  return Purchased;
};
