'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('survivor_perks', {
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
      survivorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'survivors',
          key: 'id',
        },
        field: 'survivor_id',
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('survivor_perks');
  }
};
