'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
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
      registration_number: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Cars');
  },
};
