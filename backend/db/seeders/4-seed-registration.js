'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 return queryInterface.bulkInsert('Registrations', [
      // demo user 1
         { eventId: 1, userId: 1, ticketNum: 1},
      { eventId: 2, userId: 1, ticketNum: 1},
      { eventId: 3, userId: 1, ticketNum: 1},
  //     { eventId: 4, userId: 1, ticketNum: 1},
  //     { eventId: 5, userId: 1, ticketNum: 1},
  //     // demo user 2
        //  { eventId: 2, userId: 2, ticketNum: 1},
  //     { eventId: 7, userId: 2, ticketNum: 1},
  //     { eventId: 8, userId: 2, ticketNum: 1},
  //     { eventId: 9, userId: 2, ticketNum: 1},
  //     { eventId: 10, userId: 2, ticketNum: 1},
  //     // demo user 3
        //  { eventId: 3, userId: 3, ticketNum: 1},
  //     { eventId: 12, userId: 3, ticketNum: 1},
  //     { eventId: 13, userId: 3, ticketNum: 1},
  //     { eventId: 14, userId: 3, ticketNum: 1},
  //     { eventId: 15, userId: 3, ticketNum: 1},
    ], {});

   },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Registrations', null, {});
  }
};
