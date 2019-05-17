const { Router } = require('express');
const randomPuppy = require('random-puppy');
const snoowrap = require('snoowrap');

const router = Router();

router.post('/randommeme', function(request, response) {
  const event = randomPuppy.all("dankmemes");
  event.on('data', url => response.send(url))
});

router.post('/memes/:subreddit', function(request, response) {
  const subreddit = request.params;
  const event = randomPuppy.all(subreddit);
  event.on('data', url => response.send(url))
});

module.exports = router;
