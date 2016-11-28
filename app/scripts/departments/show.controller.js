(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments')
    .controller('DepartmentController', DepartmentController);

  /* @ngInject */
  function DepartmentController($state, $http) {
    var vm = this;
    vm.department = {};
    vm.idSede = '';
    vm.deleteDepartment = deleteDepartment;
    getDepartment();

    function deleteDepartment() {
      $http.delete('/api/department/' + $state.params.id, {})
        .then(function (res) {
          $state.go('departments', { idSede: vm.idSede });
        }, function () {
          vm.product = {};
        });
    }
    function getDepartment() {
      $http.get('/api/department/' + $state.params.id, {})
        .then(function (res) {
          vm.department = res.data[0][0];
          vm.idSede = vm.department.idSede;
        }, function () {
        });
    }
  }

})();
