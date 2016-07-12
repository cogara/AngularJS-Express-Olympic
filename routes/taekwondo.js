var router = require('express').Router();

var taekwondoAthletes = [
  {name: 'Jackie Galloway', origin: 'Wylie, TX'},
  {name: 'Stephen Lambdin', origin: 'Rockwall, TX'},
  {name: 'Steven Lopez', origin: 'Sugar Land, TX'},
  {name: 'Paige McPherson', origin: 'Abilene, TX'}
]

router.get('/', function(request, response) {
  console.log('in taekwondo');
  response.send('taekwondo!');
})


module.exports = router;
