(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clients', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('clients', {
        url: '/clients',
        templateUrl: './scripts/clients/clients.html',
        controller: 'ClientsController',
        controllerAs: 'vm'
      })
      .state('client', {
        url: '/client/:id',
        templateUrl: './scripts/clients/client.html',
        controller: 'ClientController',
        controllerAs: 'vm'
      })
      .state('clientEdit', {
        url: '/client/:id/edit',
        templateUrl: './scripts/clients/client-edit.html',
        controller: 'ClientEditController',
        controllerAs: 'vm'
      })
      .state('clientNew', {
        url: '/clients/new',
        templateUrl: './scripts/clients/client-new.html',
        controller: 'ClientNewController',
        controllerAs: 'vm'
      });
  }

})();
