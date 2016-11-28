(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shelfs', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('shelfs', {
        url: '/hall/:idPasillo/shelfs',
        templateUrl: './scripts/shelfs/index.html',
        controller: 'ShelfsController',
        controllerAs: 'vm'
      })
      .state('shelf', {
        url: '/shelf/:id',
        templateUrl: './scripts/shelfs/show.html',
        controller: 'ShelfController',
        controllerAs: 'vm'
      })
      .state('shelfEdit', {
        url: '/shelf/:id/edit',
        templateUrl: './scripts/shelfs/edit.html',
        controller: 'ShelfEditController',
        controllerAs: 'vm'
      })
      .state('shelfNew', {
        url: '/hall/:idPasillo/shelfs/new',
        templateUrl: './scripts/shelfs/new.html',
        controller: 'ShelfNewController',
        controllerAs: 'vm'
      });
  }

})();
