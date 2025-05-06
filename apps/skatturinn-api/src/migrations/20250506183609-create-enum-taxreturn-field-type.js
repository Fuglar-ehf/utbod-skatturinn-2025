'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_taxreturn_field_type" AS ENUM (
        'Text_Field',
        'Date_Field',
        'Amount',
        'Text_and_Amount'
      );
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TYPE IF EXISTS "enum_taxreturn_field_type";`);
  }
};
