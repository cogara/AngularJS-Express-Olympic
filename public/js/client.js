(function() {
  'use strict';

  angular
    .module('olympicAthletes', [])
    .controller('AthleteController', AthleteController);

  AthleteController.$inject = ['$scope','$http'];

  function AthleteController($scope, $http) {
    const vm = this;

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
      console.log(data.sport, data.athletes);
    }

    function handleFailure(response) {
      console.log('failed');
    }
    vm.test = 'testing';
  }

})();
