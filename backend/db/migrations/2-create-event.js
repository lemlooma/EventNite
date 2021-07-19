'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull:true

      },
      pic: {
        type: Sequelize.STRING(255),
        allowNull:false,
      },
      location: {
        type: Sequelize.STRING(150),
         allowNull: false,
      },
      time: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      detail: {
        type: Sequelize.TEXT,
         allowNull: false,
      },
      ticketCost: {
        type: Sequelize.DECIMAL(10,2),
         allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
         allowNull: false,
         reference: { model: 'Categories' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};