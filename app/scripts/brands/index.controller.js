(function () {
  'use strict';

  angular
    .module('ferreteriaApp.brands')
    .controller('BrandsController', BrandsController);

  /* @ngInject */
  function BrandsController($http) {
    var vm = this;
    vm.brands = [];
    getBrands();

    function getBrands() {
      $http.get('/api/brands', {}).then(function (json) {
        vm.brands = json.data[0];
      }, function () {
        vm.brands = [];
      });
    }
  }

})();
