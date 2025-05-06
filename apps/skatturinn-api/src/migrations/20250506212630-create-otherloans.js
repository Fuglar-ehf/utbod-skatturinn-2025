'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OtherLoans', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      taxreturn_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TaxReturn',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      loan_description: {
        type: Sequelize.STRING,
      },
      loan_provider_national_id: {
        type: Sequelize.STRING,
      },
      interest: {
        type: Sequelize.INTEGER,
      },
      remaining: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('OtherLoans');
  },
};
