'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxReturnGroup', {
      group_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      parent_group_id: {
        type: Sequelize.INTEGER,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });

    await queryInterface.addConstraint('TaxReturnGroup', {
      fields: ['parent_group_id'],
      type: 'foreign key',
      references: {
        table: 'TaxReturnGroup',
        field: 'group_id',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('TaxReturnGroup');
  }
};
