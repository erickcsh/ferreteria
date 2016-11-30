(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('halls', {
        url: '/department/:idDepartamento/halls',
        templateUrl: './scripts/halls/index.html',
        controller: 'HallsController',
        controllerAs: 'vm'
      })
      .state('hall', {
        url: '/hall/:id',
        templateUrl: './scripts/halls/show.html',
        controller: 'HallController',
        controllerAs: 'vm'
      })
      .state('hallOrder', {
        url: '/hall/:id/order',
        templateUrl: './scripts/halls/order.html',
        controller: 'HallOrderController',
        controllerAs: 'vm'
      })
      .state('hallEdit', {
        url: '/hall/:id/edit',
        templateUrl: './scripts/halls/edit.html',
        controller: 'HallEditController',
        controllerAs: 'vm'
      })
      .state('hallNew', {
        url: '/department/:idDepartamento/halls/new',
        templateUrl: './scripts/halls/new.html',
        controller: 'HallNewController',
        controllerAs: 'vm'
      });
  }

})();
