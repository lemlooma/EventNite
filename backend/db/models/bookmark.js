"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define(
    "Bookmark",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );

  Bookmark.associate = function (models) {
    // associations can be defined here
    Bookmark.belongsTo(models.Event, { foreignKey: "eventId" });

    // 1:Many User <>Bookmarks, one user can have manyBookmarks
    Bookmark.belongsTo(models.User, { foreignKey: "userId" });
 
  };  
   return Bookmark;
};
