var express = require('express');
var eventController = require('../controllers/events');
var router = express.Router();

// Route related to delete events
router.delete('/', eventController.eraseEvents);

module.exports = router;