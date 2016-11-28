(function () {
  'use strict';

  angular
    .module('ferreteriaApp.brands')
    .controller('BrandNewController', BrandNewController);

  /* @ngInject */
  function BrandNewController($state, $http) {
    var vm = this;
    vm.brand = {};
    vm.createBrand = createBrand;

    function createBrand() {
      $http.post('api/brands', vm.brand, {})
        .then(function (data) {
          $state.go('brands');
        }, function () {
        });
    }
  }

})();
