'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');
const { Bookmark } = require("./bookmark");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 256],
          isEmail: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
          include: [
            {
              model: sequelize.models.Bookmark,
            },
          ],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
          include: [
            {
              model: sequelize.models.Bookmark,
            },
          ],
        },
        loginUser: {
          attributes: {},
          include: [
            {
              model: sequelize.models.Bookmark,
            },
          ],
        },
      },
    }
  );
 User.associate = function(models) {
    // associations can be defined here
      // 1:Many, User <> Registrations, one user can have many registration entries
    User.hasMany(models.Registration, { foreignKey: 'userId'});
    User.hasMany(models.Bookmark, { foreignKey: "userId" });

    // Many:Many Event <> User; many users can 'bookmark' many events; each bookmark adds a row to the bookmark table
    const map = {
      through: 'Bookmark', // relationship exists 'through' the join table, bookmark
      otherKey: 'eventId', // key on Event table to reference the join table
      foreignKey: 'userId', // key on User table to reference the join table
    }
    User.belongsToMany(models.Event, map);
 };
 User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
  const { id, username, email, Bookmarks } = this; // context will be the User instance
  // console.log("fdkhjsgfhhdsz")
  // console.log(this)
  return { id, username, email, Bookmarks };
  
};
User.prototype.validatePassword = function (password) {
 return bcrypt.compareSync(password, this.hashedPassword.toString());
};
User.getCurrentUserById = async function (id) {
 return await User.scope('currentUser').findByPk(id);
};
User.login = async function ({ credential, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });

  if (user && user.validatePassword(password)) {
    return await User.scope("currentUser").findByPk(user.id, {
      include: Bookmark,
    });
  }
};
User.signup = async function ({ username, email, password }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username,
    email,
    hashedPassword,
  });
  return await User.scope('currentUser').findByPk(user.id);
};
  return User;
};