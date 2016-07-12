var router = require('express').Router();

var archerAthletes = [
  {name: 'Mackenzie Brown', origin: 'Flint, TX'},
  {name: 'Brady Ellison', origin: 'Globe, AZ'},
  {name: 'Zach Garrett', origin: 'Wellington, MO'},
  {name: 'Mackenzie Brown', origin: 'Flint, TX'}
]

router.get('/', function(request, response) {
  console.log('in archery');
  response.send('Archery!');
})


module.exports = router;
