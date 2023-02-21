'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Survivor_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      survivorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Survivors',
          key: 'id',
        },
        field: 'survivor_id',
      },
      history: {
        allowNull: false,
        type: Sequelize.STRING(2000),
      }
    }, {
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Survivor_history')
  }
};
