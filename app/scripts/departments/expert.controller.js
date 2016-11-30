(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments')
    .controller('DepartmentExpertEditController', DepartmentExpertEditController);

  /* @ngInject */
  function DepartmentExpertEditController($state, $http) {
    var vm = this;
    vm.department = {};
    vm.employees = [];
    vm.editDepartment = editDepartment;
    getDepartment();

    function editDepartment() {
      $http.put('/api/department/' + $state.params.id + '/expert', vm.department, {})
        .then(function (res) {
          $state.go('department', { id: $state.params.id });
        }, function () {
        });
    }

    function getDepartment() {
      $http.get('/api/department/' + $state.params.id, {})
        .then(function (res) {
          vm.department = res.data[0][0];
          $http.get('/api/headquarter/' + vm.department.idSede + '/employees', {})
          .then(function (res) {
            vm.employees = res.data[0];
          }, function () {
            vm.employees = [];
          });
        }, function () {
          vm.department = {};
        });
    }
  }

})();
