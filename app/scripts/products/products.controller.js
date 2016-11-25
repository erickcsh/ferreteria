(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products')
    .controller('ProductsController', ProductsController);

  /* @ngInject */
  function ProductsController($http) {
    var vm = this;
    vm.products = [];
    getProducts();

    function getProducts() {
      $http.get('/api/products', {}).then(function (json) {
        vm.products = json.data[0];
      }, function () {
        vm.products = [];
      });
    }
  }

})();
