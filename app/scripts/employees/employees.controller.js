(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees')
    .controller('EmployeesController', EmployeesController);

  /* @ngInject */
  function EmployeesController($state, $http) {
    var vm = this;
    vm.employees = [];
    vm.idSede = $state.params.idSede;
    getEmployees();

    function getEmployees() {
      $http.get('/api/headquarter/' + $state.params.idSede + '/employees', {}).then(function (json) {
        vm.employees = json.data[0];
      }, function () {
        vm.employees = [];
      });
    }
  }

})();
