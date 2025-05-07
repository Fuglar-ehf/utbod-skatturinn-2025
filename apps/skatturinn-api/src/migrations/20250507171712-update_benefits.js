'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Benefits', 'from');
    await queryInterface.removeColumn('Benefits', 'name');
    await queryInterface.addColumn('Benefits', 'payer_national_id', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Benefits', 'payer_name', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Benefits', 'payer_national_id');
    await queryInterface.removeColumn('Benefits', 'payer_name');
    await queryInterface.addColumn('Benefits', 'from', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Benefits', 'name', {
      type: Sequelize.STRING,
    });
  },
};
