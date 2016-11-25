(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: './scripts/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'vm'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: './scripts/products/product.html',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .state('productEdit', {
        url: '/product/:id/edit',
        templateUrl: './scripts/products/product-edit.html',
        controller: 'ProductEditController',
        controllerAs: 'vm'
      })
      .state('productNew', {
        url: '/products/new',
        templateUrl: './scripts/products/product-new.html',
        controller: 'ProductNewController',
        controllerAs: 'vm'
      });
  }

})();
