(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employee_types')
    .controller('EmployeeTypeNewController', EmployeeTypeNewController);

  /* @ngInject */
  function EmployeeTypeNewController($state, $http) {
    var vm = this;
    vm.employee_type = {};
    vm.createEmployeeType = createEmployeeType;

    function createEmployeeType() {
      $http.post('api/employee_types', vm.employee_type, {})
        .then(function (data) {
          $state.go('employee_types');
        }, function () {
        });
    }
  }

})();
