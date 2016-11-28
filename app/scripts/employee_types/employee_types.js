(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employee_types', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('employee_types', {
        url: '/employee_types',
        templateUrl: './scripts/employee_types/employee_types.html',
        controller: 'EmployeeTypesController',
        controllerAs: 'vm'
      })
      .state('employee_type', {
        url: '/employee_type/:id',
        templateUrl: './scripts/employee_types/employee_type.html',
        controller: 'EmployeeTypeController',
        controllerAs: 'vm'
      })
      .state('employee_typeEdit', {
        url: '/employee_type/:id/edit',
        templateUrl: './scripts/employee_types/employee_type-edit.html',
        controller: 'EmployeeTypeEditController',
        controllerAs: 'vm'
      })
      .state('employee_typeNew', {
        url: '/employee_types/new',
        templateUrl: './scripts/employee_types/employee_type-new.html',
        controller: 'EmployeeTypeNewController',
        controllerAs: 'vm'
      });
  }

})();
