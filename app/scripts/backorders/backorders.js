(function () {
  'use strict';

  angular
    .module('ferreteriaApp.backorders', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('backorders', {
        url: '/backorders',
        templateUrl: './scripts/backorders/backorders.html',
        controller: 'BackordersController',
        controllerAs: 'vm'
      })
      .state('backorder', {
        url: '/backorder/:id',
        templateUrl: './scripts/backorders/backorder.html',
        controller: 'BackorderController',
        controllerAs: 'vm'
      })
      .state('backorderEdit', {
        url: '/backorder/:id/edit',
        templateUrl: './scripts/backorders/backorder-edit.html',
        controller: 'BackorderEditController',
        controllerAs: 'vm'
      })
      .state('backorderNew', {
        url: '/backorders/new',
        templateUrl: './scripts/backorders/backorder-new.html',
        controller: 'BackorderNewController',
        controllerAs: 'vm'
      });
  }

})();
