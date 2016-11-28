(function () {
  'use strict';

  angular
    .module('ferreteriaApp.brands')
    .controller('BrandController', BrandController);

  /* @ngInject */
  function BrandController($state, $http) {
    var vm = this;
    vm.brand = {};
    vm.idSede = '';
    vm.deleteBrand = deleteBrand;
    getBrand();

    function deleteBrand() {
      $http.delete('/api/brand/' + $state.params.id, {})
        .then(function (res) {
          $state.go('brands', { idSede: vm.idSede });
        }, function () {
          vm.product = {};
        });
    }
    function getBrand() {
      $http.get('/api/brand/' + $state.params.id, {})
        .then(function (res) {
          vm.brand = res.data[0][0];
          vm.idSede = vm.brand.idSede;
        }, function () {
        });
    }
  }

})();
