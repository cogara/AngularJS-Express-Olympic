var router = require('express').Router();

var archeryAthletes = {
  sport: 'archery',
  athletes: [
    {name: 'Mackenzie Brown', origin: 'Flint, TX', sport: 'Archery'},
    {name: 'Brady Ellison', origin: 'Globe, AZ', sport: 'Archery'},
    {name: 'Zach Garrett', origin: 'Wellington, MO', sport: 'Archery'},
    {name: 'Jake Kaminski', origin: 'Gainesville, FA', sport: 'Archery'}
  ]};

router.get('/', function(request, response) {
  console.log('in archery');
  response.send(archeryAthletes);
})


module.exports = router;
