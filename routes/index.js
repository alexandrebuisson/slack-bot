/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-escape */
const { Router } = require('express');
const randomPuppy = require('random-puppy');
const request = require('request');

const router = Router();

router.post('/randommeme', (req, res) => {
  const event = randomPuppy.all('dankmemes');
  event.on('data', url => res.json({
    response_type: 'in_channel',
    channel: 'CHSSBBX5F',
    text: 'Voilà ton meme :',
    attachments: [
      {
        fallback: 'Required plain-text summary of the attachment.',
        color: '#36a64f',
        image_url: url
      }
    ]
  }));
});

router.post('/randomchucknorris', (req, res) => {
  request('https://api.chucknorris.io/jokes/random', (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.json({
        response_type: 'in_channel',
        channel: 'CHSSBBX5F',
        text: "Erreur :/ merci de contacter @Alex'"
      });
    }
    res.json({
      response_type: 'in_channel',
      channel: 'CHSSBBX5F',
      text: `${JSON.parse(body).value}`
    });
    return false;
  });
});

router.post('/randomjoke', (req, res) => {
  const rnd = Math.floor(Math.random() * 115) + 1;
  request(`https://bridge.buddyweb.fr/api/blagues/blagues/${rnd}`, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.json({
        response_type: 'in_channel',
        channel: 'CHSSBBX5F',
        text: "Erreur :/ merci de contacter @Alex'"
      });
    }
    res.json({
      response_type: 'in_channel',
      channel: 'CHSSBBX5F',
      text: `${JSON.parse(body).blagues}`
    });
    return false;
  });
});

router.post('/cowsay', (req, res) => {
  const text = req.body.text;
  return res.send(`
 <${text}>
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                 ||----w |
                 ||     ||
  `);
});

module.exports = router;
