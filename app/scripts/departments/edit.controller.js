(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments')
    .controller('DepartmentEditController', DepartmentEditController);

  /* @ngInject */
  function DepartmentEditController($state, $http) {
    var vm = this;
    vm.department = {};
    vm.editDepartment = editDepartment;
    getDepartment();

    function editDepartment() {
      $http.put('/api/department/' + $state.params.id, vm.department, {})
        .then(function (res) {
          $state.go('department', { id: $state.params.id });
        }, function () {
        });
    }

    function getDepartment() {
      $http.get('/api/department/' + $state.params.id, {})
        .then(function (res) {
          vm.department = res.data[0][0];
        }, function () {
          vm.department = {};
        });
    }
  }

})();
