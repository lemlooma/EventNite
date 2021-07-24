const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { restoreUser, requireAuth } = require('../../utils/auth');
const { Event, User, Bookmark, Registration} = require('../../db/models');
const { request } = require('../../app');


const router = express.Router();


router.get('/', asyncHandler(async(req, res, next) => {
    const events = await Event.findAll();
    res.json(events)
    // console.log(events)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
    const event = await Event.findByPk(req.params.id, {include:Bookmark});
    res.json(event)
    // console.log("hello",event)
}))


// //load registered events
router.get('/registrations', restoreUser, asyncHandler( async(req, res) => {
  const { user } = req
  const registrations = await Registration.findAll({
    where: { userId: user.id },
    include: [Event],
  });
  const registeredEvents = registrations.map(register => register.Event);
  res.json(registeredEvents)
}))


// // Posts

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const event = await Event.create(req.body);
    return res.json(event);
  })
);

// //register 
router.post('/:id/registration', requireAuth, asyncHandler( async(req, res) => {
  const { ticketNum } = req.body; 
  const eventId = req.params.id
  const userId = req.user.id

  const registered = await Registration.create({ eventId, userId, ticketNum })
  const event = await Event.findByPk(eventId)

  res.json(event) //add event obj to array of registered events on front end
}))


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
// //bookmark event
// router.post('/:id/bookmark', requireAuth, asyncHandler( async(req, res) => {
//   const eventId = req.params.id
//   const userId = req.user.id
//   const bookedmarked = await Bookmark.create({ eventId, userId })
//   const event = await Event.findByPk(eventId)

//   res.json(event) //add event obj to array of bookmarked events on front end
// }))

module.exports = router;