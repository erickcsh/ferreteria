(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_models')
    .controller('CarModelEditController', CarModelEditController);

  /* @ngInject */
  function CarModelEditController($state, $http) {
    var vm = this;
    vm.car_model = {};
    vm.car_models = [];
    vm.editCarModel = editCarModel;
    vm.carBrands = [];
    getCarModel();
    getInfo();

    function editCarModel() {
      $http.put('/api/car_model/' + $state.params.id, vm.car_model, {})
        .then(function (res) {
          $state.go('car_model', { id: $state.params.id });
        }, function () {
        });
    }

    function getCarModel() {
      $http.get('/api/car_model/' + $state.params.id, {})
        .then(function (res) {
          vm.car_model = res.data[0][0];
        }, function () {
          vm.car_model = {};
        });
    }

    function getInfo() {
      $http.get('/api/car_brands/',  {})
        .then(function (res) {
          vm.car_brands= res.data[0];
        }, function () {
          vm.car_brands = [];
        });
    }
  }

})();
