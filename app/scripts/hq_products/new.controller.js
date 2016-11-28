(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_brands')
    .controller('CarBrandNewController', CarBrandNewController);

  /* @ngInject */
  function CarBrandNewController($state, $http) {
    var vm = this;
    vm.car_brand = {};
    vm.createCarBrand = createCarBrand;

    function createCarBrand() {
      $http.post('api/car_brands', vm.car_brand, {})
        .then(function (data) {
          $state.go('car_brands');
        }, function () {
        });
    }
  }

})();
