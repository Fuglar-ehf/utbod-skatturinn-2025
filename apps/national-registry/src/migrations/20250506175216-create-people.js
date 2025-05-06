'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      national_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      nominative_case_address: {
        type: Sequelize.STRING,
      },
      dative_case_address: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      birth_date: {
        type: Sequelize.DATEONLY,
      },
      family_id: {
        type: Sequelize.STRING,
      },
      marital_status: {
        type: Sequelize.STRING,
      },
      nationality: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  },
};
