const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Event, User, Bookmark, Registration } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];
  

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );


router.get(
  "/events",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const registrations = await Registration.findAll({
      where: { userId: user.id },
      include: [Event],
    });
    const registeredEvents = registrations.map((reg) => reg.Event);

    const bookmarks = await Bookmark.findAll({
          where: { userId: user.id },
          include: [Event],
        });
        const bookmarkedEvents = bookmarks.map((reg) => reg.Event);

    res.json({ registeredEvents, bookmarkedEvents });
  })
);
  
module.exports = router;
