var router = require('express').Router();
var path = require('path');

//send index html when receiving request for main url
router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
  console.log('At index.js and index.html');
})

module.exports = router;
