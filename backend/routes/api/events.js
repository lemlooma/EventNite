const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { restoreUser, requireAuth } = require("../../utils/auth");
const { Event, User, Bookmark, Registration } = require("../../db/models");
const { request } = require("../../app");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const events = await Event.findAll();
    res.json(events);
    // console.log(events)
  })
);

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const event = await Event.create(req.body);
    return res.json(event);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.id, {
      include: [Bookmark, Registration],
    });
    res.json(event);
    // console.log("hello",event)
  })
);

//edit event
router.patch(
  "/:id",
  asyncHandler(async function (req, res) {
    const number = parseInt(req.params.id, 10);
    const { name, pic, time, location, ticketCost, detail } = req.body;
    const event = await Event.findByPk(number);
    const newEvent = event.update({
      name,
      pic,
      time,
      location,
      ticketCost,
      detail,
    });
    return res.json(newEvent);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    const userId = req.user.id;

    const event = await Event.findOne({
      where: { id: eventId, userId },
    });
    if(event){
    await event.destroy();
    }

    res.sendStatus(200);
  })
);



router.get(
  "/registrations",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const registrations = await Registration.findAll({
      where: { userId: user.id },
      include: [Event],
    });
    const registeredEvents = registrations.map((reg) => reg.Event);
    res.json(registeredEvents);
  })
);
// // Posts

// //register
router.post(
  "/registration/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { ticketNum } = req.body;
    const eventId = req.params.id;
    const userId = req.user.id;

    const registeration = await Registration.create({
      eventId,
      userId,
      ticketNum,
    });
    const event = await Event.findByPk(eventId, {
      include: [Bookmark, Registration],
    });

    res.json(event); //add event obj to array of registered events on front end
  })
);

router.delete(
  "/registration/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    const userId = req.user.id;

    const registration = await Registration.findOne({
      where: { eventId, userId },
    });
    await registration.destroy();

    res.sendStatus(200);
  })
);

module.exports = router;
