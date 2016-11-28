(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('employees', {
        url: '/headquarter/:idSede/employees',
        templateUrl: './scripts/employees/employees.html',
        controller: 'EmployeesController',
        controllerAs: 'vm'
      })
      .state('employee', {
        url: '/employee/:id',
        templateUrl: './scripts/employees/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'vm'
      })
      .state('employeeEdit', {
        url: '/employee/:id/edit',
        templateUrl: './scripts/employees/employee-edit.html',
        controller: 'EmployeeEditController',
        controllerAs: 'vm'
      })
      .state('employeeNew', {
        url: '/headquarter/:idSede/employees/new',
        templateUrl: './scripts/employees/employee-new.html',
        controller: 'EmployeeNewController',
        controllerAs: 'vm'
      })
      .state('bestEmployee', {
        url: '/headquarter/:idSede/best-employees',
        templateUrl: './scripts/employees/best-employee.html',
        controller: 'BestEmployeeController',
        controllerAs: 'vm'
      });
  }

})();
