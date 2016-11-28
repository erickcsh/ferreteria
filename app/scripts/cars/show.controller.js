(function () {
  'use strict';

  angular
    .module('ferreteriaApp.cars')
    .controller('CarController', CarController);

  /* @ngInject */
  function CarController($state, $http) {
    var vm = this;
    vm.car = {};
    vm.deleteCar = deleteCar;
    getCar();

    function deleteCar() {
      $http.delete('/api/car/' + $state.params.id, {})
        .then(function (res) {
          $state.go('cars');
        }, function () {
          vm.product = {};
        });
    }
    function getCar() {
      $http.get('/api/car/' + $state.params.id, {})
        .then(function (res) {
          vm.car = res.data[0][0];
        }, function () {
        });
    }
  }

})();
