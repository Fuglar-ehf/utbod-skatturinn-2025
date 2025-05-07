'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('people', [
      {
        national_id: '0102851439',
        name: 'Davíð Ísar Þí Árnason',
        nominative_case_address: 'Aðalland 13',
        dative_case_address: 'Aðallandi 13',
        postal_code: '108',
        gender: '1',
        birth_date: '1992-11-18',
        family_id: '1811921519',
        marital_status: '1',
        nationality: 'IS'
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('people', {
      national_id: '0102851439'
    });
  }
};