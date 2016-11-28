(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employee_types')
    .controller('EmployeeTypeEditController', EmployeeTypeEditController);

  /* @ngInject */
  function EmployeeTypeEditController($state, $http) {
    var vm = this;
    vm.employee_type = {};
    vm.editEmployeeType = editEmployeeType;
    getEmployeeType();

    function editEmployeeType() {
      $http.put('/api/employee_type/' + $state.params.id, vm.employee_type, {})
        .then(function (res) {
          $state.go('employee_type', { id: $state.params.id });
        }, function () {
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
