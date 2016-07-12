var router = require('express').Router();

var tableTennisAthletes = {
  sport: 'Table Tennis',
  athletes: [
    {name: 'Yijun Feng', origin: 'Atlanta, GA'},
    {name: 'Kanak Jha', origin: 'Milpitas, CA'},
    {name: 'Timothy Wang', origin: 'Houston, TX'},
    {name: 'Jennifer Wu', origin: 'Fort Lee, NJ'},
    {name: 'Lily Zhang', origin: 'Palo Alto, CA'},
    {name: 'Jiaqi Zheng', origin: 'Fremont, CA'}
  ]};

router.get('/', function(request, response) {
  console.log('in table tennis');
  response.send(tableTennisAthletes);
})


module.exports = router;
