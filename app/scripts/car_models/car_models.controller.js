(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_models')
    .controller('CarModelsController', CarModelsController);

  /* @ngInject */
  function CarModelsController($http) {
    var vm = this;
    vm.car_models = [];
    getCarModels();

    function getCarModels() {
      $http.get('/api/car_models', {}).then(function (json) {
        vm.car_models = json.data[0];
      }, function () {
        vm.car_models = [];
      });
    }
  }

})();
