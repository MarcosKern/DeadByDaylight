'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('killer_perks', {
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
          model: 'killers',
          key: 'id',
        },
        field: 'killer_id',
      }
    }, {
      timestamps: false,
      underscored: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('killer_perks');
  }
};
