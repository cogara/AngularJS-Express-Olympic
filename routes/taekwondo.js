var router = require('express').Router();

var taekwondoAthletes = {
  sport: 'taekwondo',
  athletes: [
    {name: 'Jackie Galloway', origin: 'Wylie, TX', sport: 'Taekwondo'},
    {name: 'Stephen Lambdin', origin: 'Rockwall, TX', sport: 'Taekwondo'},
    {name: 'Steven Lopez', origin: 'Sugar Land, TX', sport: 'Taekwondo'},
    {name: 'Paige McPherson', origin: 'Abilene, TX', sport: 'Taekwondo'}
  ]};

router.get('/', function(request, response) {
  console.log('in taekwondo');
  response.send(taekwondoAthletes);
})


module.exports = router;
