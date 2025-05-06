'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxReturnFieldGroup', {
      field_group_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      mapping_from_application_system: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });

    await queryInterface.addConstraint('TaxReturnFieldGroup', {
      fields: ['group_id'],
      type: 'foreign key',
      references: {
        table: 'TaxReturnGroup',
        field: 'group_id',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('TaxReturnFieldGroup');
  }
};
