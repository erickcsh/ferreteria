(function () {
  'use strict';

  angular
    .module('ferreteriaApp.cars')
    .controller('CarsController', CarsController);

  /* @ngInject */
  function CarsController($http) {
    var vm = this;
    vm.cars = [];
    getCars();

    function getCars() {
      $http.get('/api/cars', {}).then(function (json) {
        vm.cars = json.data[0];
      }, function () {
        vm.cars = [];
      });
    }
  }

})();
