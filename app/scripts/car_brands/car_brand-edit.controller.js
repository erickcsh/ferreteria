(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_brands')
    .controller('CarBrandEditController', CarBrandEditController);

  /* @ngInject */
  function CarBrandEditController($state, $http) {
    var vm = this;
    vm.car_brand = {};
    vm.editCarBrand = editCarBrand;
    getCarBrand();

    function editCarBrand() {
      $http.put('/api/car_brand/' + $state.params.id, vm.car_brand, {})
        .then(function (res) {
          $state.go('car_brand', { id: $state.params.id });
        }, function () {
        });
    }

    function getCarBrand() {
      $http.get('/api/car_brand/' + $state.params.id, {})
        .then(function (res) {
          vm.car_brand = res.data[0][0];
        }, function () {
          vm.car_brand = {};
        });
    }
  }

})();
