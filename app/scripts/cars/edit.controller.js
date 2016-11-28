(function () {
  'use strict';

  angular
    .module('ferreteriaApp.cars')
    .controller('CarEditController', CarEditController);

  /* @ngInject */
  function CarEditController($state, $http) {
    var vm = this;
    vm.car = {};
    vm.car_models = [];
    vm.editCar = editCar;
    getCar();
    getInfo();

    function editCar() {
      $http.put('/api/car/' + $state.params.id, vm.car, {})
        .then(function (res) {
          $state.go('car', { id: $state.params.id });
        }, function () {
        });
    }

    function getCar() {
      $http.get('/api/car/' + $state.params.id, {})
        .then(function (res) {
          vm.car = res.data[0][0];
        }, function () {
          vm.car = {};
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
