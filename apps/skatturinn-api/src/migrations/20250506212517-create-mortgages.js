'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mortgages', {
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
      year_bought: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      loan_id: {
        type: Sequelize.STRING,
      },
      period_of_loan: {
        type: Sequelize.INTEGER,
      },
      loan_provider: {
        type: Sequelize.STRING,
      },
      loan_provider_national_id: {
        type: Sequelize.STRING,
      },
      principal: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Mortgages');
  },
};
