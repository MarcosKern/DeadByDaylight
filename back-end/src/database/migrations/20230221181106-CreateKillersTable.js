'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('killers', {
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
      description: {
        allowNull: false,
        type: Sequelize.STRING(6000),
      },
      lore: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      dlc: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      music: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      icon: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    }, {
      timestamps: false
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('killers');
  }
};
