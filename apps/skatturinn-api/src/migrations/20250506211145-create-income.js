'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Income', {
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
      employer_national_id: {
        type: Sequelize.STRING,
      },
      employer: {
        type: Sequelize.STRING,
      },
      income: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Income');
  },
};
