(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_models', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('car_models', {
        url: '/car_models',
        templateUrl: './scripts/car_models/car_models.html',
        controller: 'CarModelsController',
        controllerAs: 'vm'
      })
      .state('car_model', {
        url: '/car_model/:id',
        templateUrl: './scripts/car_models/car_model.html',
        controller: 'CarModelController',
        controllerAs: 'vm'
      })
      .state('car_modelEdit', {
        url: '/car_model/:id/edit',
        templateUrl: './scripts/car_models/car_model-edit.html',
        controller: 'CarModelEditController',
        controllerAs: 'vm'
      })
      .state('car_modelNew', {
        url: '/car_models/new',
        templateUrl: './scripts/car_models/car_model-new.html',
        controller: 'CarModelNewController',
        controllerAs: 'vm'
      });
  }

})();
