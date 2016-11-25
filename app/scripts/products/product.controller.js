(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products')
    .controller('ProductController', ProductController);

  /* @ngInject */
  function ProductController($state, $http) {
    var vm = this;
    vm.product = {};
    vm.deleteProduct = deleteProduct;
    getProduct();

    function deleteProduct() {
      $http.delete('/api/product/' + $state.params.id, {})
        .then(function (res) {
          $state.go('products');
        }, function () {
          vm.product = {};
        });
    }

    function getProduct() {
      $http.get('/api/product/' + $state.params.id, {})
        .then(function (res) {
          vm.product = res.data[0][0];
        }, function () {
          vm.product = {};
        });
    }
  }

})();
