(function() {
  'use strict';

  angular
    .module('olympicAthletes', [])
    .controller('AthleteController', AthleteController);

  AthleteController.$inject = ['$scope','$http'];

  function AthleteController($scope, $http) {
    const vm = this;

    vm.athletesList = {};
    vm.getHTTP = getHTTP;
    vm.randomAthleteList = [];
    vm.testLog = testLog;

    getHTTP('archery');
    getHTTP('tabletennis');
    getHTTP('modernpentathlon');
    getHTTP('canoe');
    getHTTP('taekwondo');

    function getHTTP(sport) {
      $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
    }

    function handleSuccess(response) {
      let data = response.data;
      vm.athletesList[data.sport] = data.athletes;
    }

    function testLog() {
      randomAthlete(vm.athletesList);
      console.log(vm.randomAthleteList);
    }

    function handleFailure(response) {
      console.log('failed');
    }

    function randomAthlete(obj) {
      vm.randomAthleteList = [];
      for (var key in obj) {
        let numAthletes = obj[key].length;
        let randomAthlete = Math.floor(Math.random() * (numAthletes));
        let tempAthlete = obj[key][randomAthlete];
        vm.randomAthleteList.push({sport: key, name: tempAthlete.name, origin: tempAthlete.origin });
      }
    }
  }

})();
