(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products')
    .controller('ProductNewController', ProductNewController);

  /* @ngInject */
  function ProductNewController($state, $http) {
    var vm = this;
    vm.product = {};
    vm.brands = [];
    vm.createProduct = createProduct;
    loadInfo();

    function createProduct() {
      $http.post('api/products', vm.product, {})
        .then(function (data) {
          $state.go('products');
        }, function () {
        });
    }

    function loadInfo() {
      $http.get('api/brands', {})
        .then(function (data) {
          vm.brands = data.data[0];
        }, function () {
          vm.brands = [];
        });
    }
  }

})();
