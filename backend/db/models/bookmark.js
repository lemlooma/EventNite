'use strict';
module.exports = (sequelize, DataTypes) => {
   const Bookmark = sequelize.define('Bookmark', {
  userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  
  }, {});

  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};