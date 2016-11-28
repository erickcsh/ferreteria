(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_models')
    .controller('CarModelController', CarModelController);

  /* @ngInject */
  function CarModelController($state, $http) {
    var vm = this;
    vm.car_model = {};
    vm.deleteCarModel = deleteCarModel;
    getCarModel();

    function deleteCarModel() {
      $http.delete('/api/car_model/' + $state.params.id, {})
        .then(function (res) {
          $state.go('car_models');
        }, function () {
          vm.product = {};
        });
    }
    function getCarModel() {
      $http.get('/api/car_model/' + $state.params.id, {})
        .then(function (res) {
          vm.car_model = res.data[0][0];
        }, function () {
        });
    }
  }

})();
