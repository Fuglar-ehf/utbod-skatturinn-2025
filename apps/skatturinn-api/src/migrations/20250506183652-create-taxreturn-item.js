'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxReturnItem', {
      Item_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      taxreturn_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      field_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      input_string: {
        type: Sequelize.STRING,
      },
      input_number: {
        type: Sequelize.DOUBLE,
      },
      input_date: {
        type: Sequelize.DATEONLY,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });

    await queryInterface.addConstraint('TaxReturnItem', {
      fields: ['taxreturn_id'],
      type: 'foreign key',
      references: {
        table: 'TaxReturn',
        field: 'id',
      },
    });

    await queryInterface.addConstraint('TaxReturnItem', {
      fields: ['field_Id'],
      type: 'foreign key',
      references: {
        table: 'TaxReturnField',
        field: 'field_Id',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('TaxReturnItem');
  }
};
