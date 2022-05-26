const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sock }) {
      // define association here
      Purchase.belongsTo(User, { foreignKey: 'user_id' });
      Purchase.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  Purchase.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id', // необязательно при дефолтном названии `id`
      },
    },
    sock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Socks',
        key: 'id', // необязательно при дефолтном названии `id`
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
    modelName: 'Purchase',
    tableName: 'Purchases',
  });
  return Purchase;
};
