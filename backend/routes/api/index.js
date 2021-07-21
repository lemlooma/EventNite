const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const bookmarkRouter = require("./bookmark.js");

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use("/bookmark", bookmarkRouter);


  
    


module.exports = router;