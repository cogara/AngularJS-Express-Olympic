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
    vm.randomAthleteList = {};
    vm.testLog = testLog;
    vm.randomAthlete = randomAthlete;

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


    function handleFailure(response) {
      console.log('failed');
    }

    function testLog() {
      console.log('full list:', vm.athletesList);
      console.log('random list:', vm.randomAthleteList);
    }


    function randomAthlete(data) {
      vm.randomAthleteList[data] = {};
      let tempSportList = vm.athletesList[data];
      let tempAthlete = tempSportList[Math.floor(Math.random() * (tempSportList.length))];
      vm.randomAthleteList[data] = tempAthlete;
      console.log(vm.randomAthleteList);
      // let tempAthlete = vm.athletesList[data]
      // for (var i = 0; i < vm.athletesList[data].length; i++) {
      //   console.log(vm.athletesList[data][i]);
      // }
      // vm.randomAthleteList = [];
      // for (var key in obj) {
      //   let numAthletes = obj[key].length;
      //   let randomAthlete = Math.floor(Math.random() * (numAthletes));
      //   let tempAthlete = obj[key][randomAthlete];
        // vm.randomAthleteList.push({sport: tempAthlete.sport, name: tempAthlete.name, origin: tempAthlete.origin });
      // }
    }
  }

})();
