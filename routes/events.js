var express = require('express');
var eventController = require('../controllers/events');
var router = express.Router();

// Routes related to event
router.route('/')
  .get(eventController.getAllEvents)
  .post(eventController.addEvent);

router.get('/actors/:actorID', eventController.getByActor);

module.exports = router;
