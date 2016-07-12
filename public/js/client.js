(function() {
  'use strict';

  angular
    .module('olympicAthletes', [])
    .controller('AthleteController', AthleteController);

  AthleteController.$inject = ['$scope','$http'];

  function AthleteController($scope, $http) {
    const vm = this;

    vm.athletesList = [];
    vm.getHTTP = getHTTP;
    vm.randomAthleteList = [];

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
      randomAthlete(data);
      // console.log(data.sport, data.athletes);
    }

    function handleFailure(response) {
      console.log('failed');
    }

    function randomAthlete(sportData) {
      let sport = sportData.sport;
      let athletes = sportData.athletes;
      let numAthletes = athletes.length;
      let randomAthlete = Math.floor(Math.random() * (numAthletes));
      vm.randomAthleteList.push({sport: sport, name: athletes[randomAthlete].name, origin: athletes[randomAthlete].origin});
      console.log(athletes[randomAthlete]);
    }

  }

})();
