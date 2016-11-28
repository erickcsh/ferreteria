(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees')
    .controller('EmployeeController', EmployeeController);

  /* @ngInject */
  function EmployeeController($state, $http) {
    var vm = this;
    vm.employee = {};
    vm.deleteEmployee = deleteEmployee;
    getEmployee();

    function deleteEmployee() {
      $http.delete('/api/employee/' + $state.params.id, {})
        .then(function (res) {
          $state.go('employees', { idSede: vm.employee.idSede });
        }, function () {
        });
    }

    function getEmployee() {
      $http.get('/api/employee/' + $state.params.id, {})
        .then(function (res) {
          vm.employee = res.data[0][0];
        }, function () {
          vm.employee = {};
        });
    }
  }

})();
