(function () {
  'use strict';

  angular
    .module('ferreteriaApp.routes', [
      'ui.router',
      'uiGmapgoogle-maps',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('routes', {
        url: '/routes',
        templateUrl: './scripts/routes/index.html',
        controller: 'RoutesController',
        controllerAs: 'vm'
      })
      .state('route', {
        url: '/route/:id',
        templateUrl: './scripts/routes/show.html',
        controller: 'RouteController',
        controllerAs: 'vm'
      });
  }

})();
