'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Bookmarks', [
      // demo user 1
      { eventId: 1, userId: 1},
      // { eventId: 14, userId: 1},
      // { eventId: 12, userId: 1},

      // // demo user 2
      // { eventId: 13, userId: 2},
      // { eventId: 12, userId: 2},

      // // demo user 3
      // { eventId: 1, userId: 3},
      // { eventId: 2, userId: 3},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookmarks', null, {});
  }
};
