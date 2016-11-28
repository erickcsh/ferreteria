(function () {
  'use strict';

  angular
    .module('ferreteriaApp.brands', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('brands', {
        url: '/brands',
        templateUrl: './scripts/brands/index.html',
        controller: 'BrandsController',
        controllerAs: 'vm'
      })
      .state('brand', {
        url: '/brand/:id',
        templateUrl: './scripts/brands/show.html',
        controller: 'BrandController',
        controllerAs: 'vm'
      })
      .state('brandEdit', {
        url: '/brand/:id/edit',
        templateUrl: './scripts/brands/edit.html',
        controller: 'BrandEditController',
        controllerAs: 'vm'
      })
      .state('brandNew', {
        url: '/brands/new',
        templateUrl: './scripts/brands/new.html',
        controller: 'BrandNewController',
        controllerAs: 'vm'
      });
  }

})();
