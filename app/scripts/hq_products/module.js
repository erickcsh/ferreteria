(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products', [
      'ui.router',
      'ferreteriaApp.shoppingCore',
      'ferreteriaApp.authCore',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('hq_products', {
        url: '/headquarter/:idSede/hq_products',
        templateUrl: './scripts/hq_products/index.html',
        controller: 'HQProductsController',
        controllerAs: 'vm'
      })
      .state('hq_productNew', {
        url: '/headquarter/:idSede/hq_products/new',
        templateUrl: './scripts/hq_products/new.html',
        controller: 'HQProductNewController',
        controllerAs: 'vm'
      })
      .state('search', {
        url: '/headquarter/:idSede/search',
        templateUrl: './scripts/hq_products/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .state('pay', {
        url: '/pay/:id',
        templateUrl: './scripts/hq_products/pay.html',
        controller: 'PaymentController',
        controllerAs: 'vm'
      })
      .state('bill', {
        url: '/headquarter/:idSede/bill',
        templateUrl: './scripts/hq_products/bill.html',
        controller: 'PayProductsController',
        controllerAs: 'vm'
      });
  }

})();
