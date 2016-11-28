(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_brands')
    .controller('CarBrandController', CarBrandController);

  /* @ngInject */
  function CarBrandController($state, $http) {
    var vm = this;
    vm.car_brand = {};
    vm.deleteCarBrand = deleteCarBrand;
    getCarBrand();

    function deleteCarBrand() {
      $http.delete('/api/car_brand/' + $state.params.id, {})
        .then(function (res) {
          $state.go('car_brands');
        }, function () {
          vm.product = {};
        });
    }
    function getCarBrand() {
      $http.get('/api/car_brand/' + $state.params.id, {})
        .then(function (res) {
          vm.car_brand = res.data[0][0];
        }, function () {
        });
    }
  }

})();
