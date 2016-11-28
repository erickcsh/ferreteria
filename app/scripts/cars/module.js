(function () {
  'use strict';

  angular
    .module('ferreteriaApp.cars', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cars', {
        url: '/cars',
        templateUrl: './scripts/cars/index.html',
        controller: 'CarsController',
        controllerAs: 'vm'
      })
      .state('car', {
        url: '/car/:id',
        templateUrl: './scripts/cars/show.html',
        controller: 'CarController',
        controllerAs: 'vm'
      })
      .state('carEdit', {
        url: '/car/:id/edit',
        templateUrl: './scripts/cars/edit.html',
        controller: 'CarEditController',
        controllerAs: 'vm'
      })
      .state('carNew', {
        url: '/cars/new',
        templateUrl: './scripts/cars/new.html',
        controller: 'CarNewController',
        controllerAs: 'vm'
      });
  }

})();
