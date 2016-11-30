(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('HQProductsController', HQProductsController);

  /* @ngInject */
  function HQProductsController($http, $state, shoppingCart) {
    var vm = this;
    vm.hq_products = [];
    vm.idSede = $state.params.idSede;
    vm.addToCart = addToCart;
    getHQProducts();

    function getHQProducts() {
      $http.get('/api/headquarter/' + vm.idSede + '/hq_products', {}).then(function (json) {
        vm.hq_products = json.data[0];
        vm.hq_products = vm.hq_products.map(function (prod) {
          prod.cantidadDisponible = prod.Cantidad;
          return prod;
        });
      }, function () {
        vm.hq_products = [];
      });
    }

    function addToCart(product) {
      shoppingCart.addProduct(product);
      product.cantidadDisponible--;
    }
  }

})();
