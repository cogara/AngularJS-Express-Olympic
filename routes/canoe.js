var router = require('express').Router();

var canoeAthletes = {
  sport: 'canoeKayak',
  athletes: [
    {name: 'Casey Eichfeld', origin: 'Drums, PA', sport: 'Canoe/Kayak'},
    {name: 'Maggie Hogan', origin: 'Huntington Beach, CA', sport: 'Canoe/Kayak'},
    {name: 'Devin McEwan', origin: 'Salisbury, CT', sport: 'Canoe/Kayak'},
    {name: 'Ashley Nee', origin: 'Darnestown, MD', sport: 'Canoe/Kayak'},
    {name: 'Michal Smolen', origin: 'Gastonia, NC', sport: 'Canoe/Kayak'}
  ]};

router.get('/', function(request, response) {
  console.log('in canoe');
  response.send(canoeAthletes);
})


module.exports = router;
