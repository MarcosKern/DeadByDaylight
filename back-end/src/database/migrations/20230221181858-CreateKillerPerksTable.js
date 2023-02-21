'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Killer_perks', {
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
      killerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Killers',
          key: 'id',
        },
        field: 'killer_id',
      }
    }, {
      timestamps: false
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('killer_perks');
  }
};
