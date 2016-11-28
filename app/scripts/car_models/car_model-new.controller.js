(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_models')
    .controller('CarModelNewController', CarModelNewController);

  /* @ngInject */
  function CarModelNewController($state, $http) {
    var vm = this;
    vm.car_model = {};
    vm.car_brands = [];
    vm.createCarModel = createCarModel;
    getInfo();

    function createCarModel() {
      $http.post('api/car_models', vm.car_model, {})
        .then(function (data) {
          $state.go('car_models');
        }, function () {
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
