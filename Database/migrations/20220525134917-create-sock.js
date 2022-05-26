module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Socks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      color: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      picture: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      pattern: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      favorite_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Favorites',
          key: 'id',
          as: 'sock_id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Socks');
  },
};
