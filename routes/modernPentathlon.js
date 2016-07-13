var router = require('express').Router();

//set Modern Pentathlon athletes object to be returned to user
var modernPentathlonAthletes = {
  sport: 'modernPentathlon',
  athletes: [
    {name: 'Isabella Isaksen', origin: 'Fayettevill, AR', sport: 'Modern Pentathlon'},
    {name: 'Margaux Isaksen', origin: 'Fayetteville, AR', sport: 'Modern Pentathlon'},
    {name: 'Nathan Schrimsher', origin: 'Roswell, NM', sport: 'Modern Pentathlon'}
  ]};

router.get('/', function(request, response) {
  console.log('in modern pent');
  response.send(modernPentathlonAthletes);
})


module.exports = router;
