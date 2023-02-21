'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Survivors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'image_url',
      },
      lore: {
        allowNull: false,
        type: Sequelize.STRING(1000),
      },
      dlc: {
        allowNull: true,
        type: Sequelize.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('survivors');
  }
};
