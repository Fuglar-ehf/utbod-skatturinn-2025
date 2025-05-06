'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxReturnField', {
      field_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      field_group_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fieldType: {
        type: Sequelize.ENUM(
          'Text_Field',
          'Date_Field',
          'Amount',
          'Text_and_Amount'
        ),
        allowNull: false,
      },
      order_in_field_group: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      field_code: {
        type: Sequelize.INTEGER,
      },
      mapping_from_application_system: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });

    await queryInterface.addConstraint('TaxReturnField', {
      fields: ['field_group_Id'],
      type: 'foreign key',
      references: {
        table: 'TaxReturnFieldGroup',
        field: 'field_group_Id',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('TaxReturnField');
  }
};
