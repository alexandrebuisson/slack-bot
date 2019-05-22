const { Router } = require('express');
const randomPuppy = require('random-puppy');
const request = require('request');


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

router.post('/randomchucknorris', function(req, res, next) {
  request("https://api.chucknorris.io/jokes/rando", function(err, response, body) {
    if(err || response.statusCode !== 200) {
      return  res.json({response_type: 'in_channel', channel: 'CHSSBBX5F', text: "Erreur :/ merci de contacter @Alex'"})
    }

    res.json({
      response_type: 'in_channel',
      channel: 'CHSSBBX5F',
      text: `${JSON.parse(body).value}`
    })
    
  })
});

module.exports = router;
