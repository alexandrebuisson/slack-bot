const { Router } = require('express');
const randomPuppy = require('random-puppy');


const router = Router();



router.post('/randommeme', function(req, res) {
  const event = randomPuppy.all("dankmemes");
  event.on('data', url => res.json({
      response_type: 'in_channel',
      channel: 'CHSSBBX5F',
      text: 'Voilà ton meme :',
      attachments: [
        {
          "fallback": "Required plain-text summary of the attachment.",
          "color": "#36a64f",
          "image_url": url
        }
      ]
    }))
});

module.exports = router;
