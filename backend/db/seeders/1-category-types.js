'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Free'},
      { category: 'Dance/Parties'},
      { category: 'Music'},
      { category: 'Film'},
      { category: 'Food & Drink'},
      { category: 'Network'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
  }
};
