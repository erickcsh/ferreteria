(function () {
  'use strict';

  angular
    .module('ferreteriaApp.brands')
    .controller('BrandEditController', BrandEditController);

  /* @ngInject */
  function BrandEditController($state, $http) {
    var vm = this;
    vm.brand = {};
    vm.editBrand = editBrand;
    getBrand();

    function editBrand() {
      $http.put('/api/brand/' + $state.params.id, vm.brand, {})
        .then(function (res) {
          $state.go('brand', { id: $state.params.id });
        }, function () {
        });
    }

    function getBrand() {
      $http.get('/api/brand/' + $state.params.id, {})
        .then(function (res) {
          vm.brand = res.data[0][0];
        }, function () {
          vm.brand = {};
        });
    }
  }

})();
