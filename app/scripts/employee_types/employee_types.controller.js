(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employee_types')
    .controller('EmployeeTypesController', EmployeeTypesController);

  /* @ngInject */
  function EmployeeTypesController($http) {
    var vm = this;
    vm.employee_types = [];
    getEmployeeTypes();

    function getEmployeeTypes() {
      $http.get('/api/employee_types', {}).then(function (json) {
        vm.employee_types = json.data[0];
      }, function () {
        vm.employee_types = [];
      });
    }
  }

})();
