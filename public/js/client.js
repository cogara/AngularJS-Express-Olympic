(function() {
  'use strict';

  angular
    .module('olympicAthletes', [])
    .controller('AthleteController', AthleteController);

  AthleteController.$inject = ['$scope','$http'];

  function AthleteController($scope, $http) {
    const vm = this;

    vm.athletesList = {};
    vm.randomAthleteList = {};
    vm.testLog = testLog;
    vm.randomAthlete = randomAthlete;
    vm.randomAll = randomAll;

    getHTTP('archery');
    getHTTP('tabletennis');
    getHTTP('modernpentathlon');
    getHTTP('taekwondo');
    getHTTP('canoe');


    function getHTTP(sport) {
      $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
    }

    function handleSuccess(response) {
      let data = response.data;
      vm.athletesList[data.sport] = data.athletes;
      randomAthlete(data.sport);
    }

    function handleFailure(response) {
      console.log('failed');
    }

    function randomAthlete(sport) {
      vm.randomAthleteList[sport] = {};
      let tempSportList = vm.athletesList[sport];
      let tempAthlete = tempSportList[Math.floor(Math.random() * (tempSportList.length))];
      vm.randomAthleteList[sport] = tempAthlete;
    }

    function testLog() {
      console.log('full list:', vm.athletesList);
      console.log('Random List:');
      for (var sport in vm.randomAthleteList) {
        console.log(sport, vm.randomAthleteList[sport].name);
      }
    }

    function randomAll() {
      for (var sport in vm.athletesList) {
        randomAthlete(sport);
      }
      testLog();
    }
  }

})();
