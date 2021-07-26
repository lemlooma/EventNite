const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Event, User, Bookmark } = require("../../db/models");
const { request } = require("../../app");

const router = express.Router();

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    let bookmark = await Bookmark.findOne({
      where: { eventId: req.body.eventId, userId: req.body.userId },
    });
    if (!bookmark) {
      bookmark = await Bookmark.create({
        eventId: req.body.eventId,
        userId: req.body.userId,
      });
    }
    res.json(bookmark);
    // console.log(bookmark);
  })
);

router.delete(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    let bookmark = await Bookmark.findOne({
      where: { eventId: req.body.eventId, userId: req.body.userId },
    });
    if (bookmark) {
     await bookmark.destory()
    }
    res.sendStatus(200);
    // console.log(bookmark);
  })
);

module.exports = router;
