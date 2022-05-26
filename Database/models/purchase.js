const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate({ User, Sock }) {
      Purchase.belongsTo(User, { foreignKey: 'user_id' });
      Purchase.belongsTo(Sock, { foreignKey: 'id' });
    }
  }
  Purchase.init({
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
    modelName: 'Purchase',
    tableName: 'Purchases',
  });
  return Purchase;
};
