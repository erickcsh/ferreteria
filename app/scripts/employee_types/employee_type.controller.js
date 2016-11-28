(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employee_types')
    .controller('EmployeeTypeController', EmployeeTypeController);

  /* @ngInject */
  function EmployeeTypeController($state, $http) {
    var vm = this;
    vm.employee_type = {};
    vm.deleteEmployeeType = deleteEmployeeType;
    getEmployeeType();

    function deleteEmployeeType() {
      $http.delete('/api/employee_type/' + $state.params.id, {})
        .then(function (res) {
          $state.go('employee_types');
        }, function () {
          vm.product = {};
        });
    }

    function getEmployeeType() {
      $http.get('/api/employee_type/' + $state.params.id, {})
        .then(function (res) {
          vm.employee_type = res.data[0][0];
        }, function () {
          vm.employee_type = {};
        });
    }
  }

})();
