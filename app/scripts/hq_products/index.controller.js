(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_brands')
    .controller('CarBrandsController', CarBrandsController);

  /* @ngInject */
  function CarBrandsController($http) {
    var vm = this;
    vm.car_brands = [];
    getCarBrands();

    function getCarBrands() {
      $http.get('/api/car_brands', {}).then(function (json) {
        vm.car_brands = json.data[0];
      }, function () {
        vm.car_brands = [];
      });
    }
  }

})();
