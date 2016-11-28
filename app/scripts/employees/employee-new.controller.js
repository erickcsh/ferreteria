(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees')
    .controller('EmployeeNewController', EmployeeNewController);

  /* @ngInject */
  function EmployeeNewController($state, $http) {
    var vm = this;
    vm.employee = {
      idSede: $state.params.idSede
    };
    vm.employee_types = {};
    vm.createEmployee = createEmployee;
    loadInfo();

    function createEmployee() {
      $http.post('api/employees', vm.employee, {})
        .then(function (data) {
          $state.go('employees', { idSede: vm.employee.idSede });
        }, function () {
        });
    }

    function loadInfo() {
      $http.get('api/employee_types', {})
        .then(function (data) {
          vm.employee_types = data.data[0];
        }, function () {
        });
      $http.get('api/headquarter/' + vm.employee.idSede, {})
        .then(function (data) {
          vm.employee.nombreSede = data.data[0][0].nombre;
        }, function () {
        });
    }
  }

})();
