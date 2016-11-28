(function () {
  'use strict';

  angular
    .module('ferreteriaApp.cars')
    .controller('CarNewController', CarNewController);

  /* @ngInject */
  function CarNewController($state, $http) {
    var vm = this;
    vm.car = {};
    vm.car_models = [];
    vm.createCar = createCar;
    getInfo();

    function createCar() {
      $http.post('api/cars', vm.car, {})
        .then(function (data) {
          $state.go('cars');
        }, function () {
        });
    }

    function getInfo() {
      $http.get('api/car_models', vm.car, {})
        .then(function (data) {
          vm.car_models = data.data[0];
        }, function () {
        });
    }
  }

})();
