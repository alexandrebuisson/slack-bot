const { Router } = require('express');
const randomPuppy = require('random-puppy');
const snoowrap = require('snoowrap');

const router = Router();

router.get('/randommeme', function(request, response) {
  const event = randomPuppy.all("dankmemes");
  event.on('data', url => response.send(url))
});

module.exports = router;
