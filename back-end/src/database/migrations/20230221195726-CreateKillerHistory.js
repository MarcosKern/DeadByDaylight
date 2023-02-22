'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('killer_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      killerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'killers',
          key: 'id',
        },
        field: 'killer_id',
      },
      history: {
        allowNull: false,
        type: Sequelize.STRING(2000),
      }
    }, {
      timestamps: false
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('killer_history')
  }
};
