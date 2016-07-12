var router = require('express').Router();

var modernPentathlonAthletes = [
  {name: 'Isabella Isaksen', origin: 'Fayettevill, AR'},
  {name: 'Margaux Isaksen', origin: 'Fayetteville, AR'},
  {name: 'Nathan Schrimsher', origin: 'Roswell, NM'}
]

router.get('/', function(request, response) {
  console.log('in modern pent');
  response.send(modernPentathlonAthletes);
})


module.exports = router;
