var router = require('express').Router();

var canoeAthletes = [
  {name: 'Casey Eichfeld', origin: 'Drums, PA'},
  {name: 'Maggie Hogan', origin: 'Huntington Beach, CA'},
  {name: 'Devin McEwan', origin: 'Salisbury, CT'},
  {name: 'Ashley Nee', origin: 'Darnestown, MD'},
  {name: 'Michal Smolen', origin: 'Gastonia, NC'}
]

router.get('/', function(request, response) {
  console.log('in canoe');
  response.send('Canoe!');
})


module.exports = router;
