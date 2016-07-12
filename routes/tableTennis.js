var router = require('express').Router();

var tableTennisAthletes = {
  sport: 'tableTennis',
  athletes: [
    {name: 'Yijun Feng', origin: 'Atlanta, GA', sport: 'Table Tennis'},
    {name: 'Kanak Jha', origin: 'Milpitas, CA', sport: 'Table Tennis'},
    {name: 'Timothy Wang', origin: 'Houston, TX', sport: 'Table Tennis'},
    {name: 'Jennifer Wu', origin: 'Fort Lee, NJ', sport: 'Table Tennis'},
    {name: 'Lily Zhang', origin: 'Palo Alto, CA', sport: 'Table Tennis'},
    {name: 'Jiaqi Zheng', origin: 'Fremont, CA', sport: 'Table Tennis'}
  ]};

router.get('/', function(request, response) {
  console.log('in table tennis');
  response.send(tableTennisAthletes);
})


module.exports = router;
