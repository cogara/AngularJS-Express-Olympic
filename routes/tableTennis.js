var router = require('express').Router();

var tableTennisAthletes = {
  sport: 'Table Tennis',
  athletes: [
    {name: 'Yijun Feng', origin: 'Atlanta, GA'},
    {name: 'Kanak Jha', origin: 'Milpitas, CA'},
    {name: 'Timothy Wang', origin: 'Houston, TX'},
    {name: 'Timothy Wang', origin: 'Houston, TX'}
  ]};

router.get('/', function(request, response) {
  console.log('in table tennis');
  response.send(tableTennisAthletes);
})


module.exports = router;
