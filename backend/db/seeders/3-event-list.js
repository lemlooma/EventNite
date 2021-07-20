'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [

     {
       name: 'NYC Yacht Party',
       pic: 'http://placeimg.com/640/480/nightlife',
       location: 'Skyport Marina • New York, NY',
       time: 'Fri, Aug 13, 7:00 PM',
       detail: 'Join us aboard the Jewels Yacht NYC For the next hours, you and your friends will enjoy an incredible live, well-stocked cash bars, and beautiful views of the Manhattan skyline.Come ready to party & have wonderful experience on the nyc yacht party cruise. But get your tickets soon because this event is going to sell out fast.',
       ticketCost: '70.00',
       categoryId: 2
     },

     {
       name: 'Open Mic',
       pic: 'http://placeimg.com/640/480/nightlife',
       location: 'Lems Mic • New York, NY',
       time: 'Sat, July 23, 9:00 PM',
       detail: 'You got a mouth we got a mic! Stage is open to all, just be nice. Also a plus if you actually have talent!',
       ticketCost: '0.00',
       categoryId: 1
     },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
