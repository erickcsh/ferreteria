(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clientSection', ['ferreteriaApp.shoppingCore'])
    .config(configStates)
    .controller('ClientHomeController', ClientHomeController);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('user-home', {
        url: '/user/home',
        templateUrl: './scripts/client-section/home.html',
        controller: 'ClientHomeController',
        controllerAs: 'vm'
      });
  }

  /* @ngInject */
  function ClientHomeController($state, $http, shoppingCart) {
    var vm = this;
    vm.products = [];
    vm.addToCart = addToCart;
    getProducts();

    function getProducts() {
      $http.get('/api/products', {}).then(function (json) {
        vm.products = json.data[0];
      }, function () {
        vm.products = [];
      });
    }

    function addToCart(product) {
      shoppingCart.addProduct(product);
    }
  }


})();
