(function () {
  'use strict';

  angular
    .module('ferreteriaApp.car_brands', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('car_brands', {
        url: '/car_brands',
        templateUrl: './scripts/car_brands/car_brands.html',
        controller: 'CarBrandsController',
        controllerAs: 'vm'
      })
      .state('car_brand', {
        url: '/car_brand/:id',
        templateUrl: './scripts/car_brands/car_brand.html',
        controller: 'CarBrandController',
        controllerAs: 'vm'
      })
      .state('car_brandEdit', {
        url: '/car_brand/:id/edit',
        templateUrl: './scripts/car_brands/car_brand-edit.html',
        controller: 'CarBrandEditController',
        controllerAs: 'vm'
      })
      .state('car_brandNew', {
        url: '/car_brands/new',
        templateUrl: './scripts/car_brands/car_brand-new.html',
        controller: 'CarBrandNewController',
        controllerAs: 'vm'
      });
  }

})();
