var express = require('express');
var actorController = require('../controllers/actors');
var router = express.Router();

// Routes related to actor.
router.route('/')
  .get(actorController.getAllActors)
  .put(actorController.updateActor);

router.get('/streak', actorController.getStreak);

module.exports = router;