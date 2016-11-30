(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees')
    .controller('BestEmployeeController', BestEmployeeController);

  /* @ngInject */
  function BestEmployeeController($state, $http) {
    var vm = this;
    vm.employee = {};
    vm.idSede = $state.params.idSede;
    getEmployee();

    function getEmployee() {
      $http.get('/api/headquarter/' + vm.idSede + '/best-employee', {}).then(function (json) {
        vm.employee = json.data[0][0];
      }, function () {
        vm.employee = {};
      });
    }
  }

})();
