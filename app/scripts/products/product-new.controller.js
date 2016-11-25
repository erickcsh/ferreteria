(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products')
    .controller('ProductNewController', ProductNewController);

  /* @ngInject */
  function ProductNewController($state, $http) {
    var vm = this;
    vm.product = {};
    vm.createProduct = createProduct;

    function createProduct() {
      $http.post('api/products', vm.product, {})
        .then(function (data) {
          $state.go('products');
        }, function () {
        });
    }
  }

})();
