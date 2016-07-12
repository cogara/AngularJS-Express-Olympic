var router = require('express').Router();

var archery = require('./archery.js');
var canoe = require('./canoe.js');
var modernPentathlon = require('./modernPentathlon.js');
var taekwondo = require('./taekwondo.js');
var tableTennis = require('./tableTennis.js');

router.get('/', function(request, response) {
  console.log('in olympics');
  response.send('In Olympics');
})

router.use('/archery', archery);
router.use('/canoe', canoe);
router.use('/modernpentathlon', modernPentathlon);
router.use('/taekwondo', taekwondo);
router.use('/tabletennis', tableTennis);

module.exports = router;
