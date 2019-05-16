const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/hotmemes/:posturl', (req, res) => {
  const posturl = req.params
  res.json({
    title: posturl
  });
});

module.exports = router;
