'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ticketCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Categories'},
    },
  }, {});
  Event.associate = function(models) {

    // 1:Many, Category <> Events, one category type can be set on many event entries
    Event.belongsTo(models.Category, { foreignKey: 'categoryId'});
    // 1:Many, Event <> Registrations, one event has many registration entries
    Event.hasMany(models.Registration, { foreignKey: 'eventId'});
    Event.hasMany(models.Bookmark, { foreignKey: "eventId" });
    
    // Many:Many Event <> User; many users can 'bookmark' many events; each bookmark adds a row to the bookmark table
    const mapping = {
      through: 'Bookmark', // relationship exists 'through' the join table, Favorite
      otherKey: 'userId', // key on Event table to reference the join table
      foreignKey: 'eventId', // key on User table to reference the join table
    };

    Event.belongsToMany(models.User, mapping);
    
  };
  return Event;
};