(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('headquarters', {
        url: '/headquarters',
        templateUrl: './scripts/headquarters/headquarters.html',
        controller: 'HeadquartersController',
        controllerAs: 'vm'
      })
      .state('headquarter', {
        url: '/headquarter/:id',
        templateUrl: './scripts/headquarters/headquarter.html',
        controller: 'HeadquarterController',
        controllerAs: 'vm'
      })
      .state('headquarterEdit', {
        url: '/headquarter/:id/edit',
        templateUrl: './scripts/headquarters/headquarter-edit.html',
        controller: 'HeadquarterEditController',
        controllerAs: 'vm'
      })
      .state('headquarterNew', {
        url: '/headquarters/new',
        templateUrl: './scripts/headquarters/headquarter-new.html',
        controller: 'HeadquarterNewController',
        controllerAs: 'vm'
      });
  }

})();
