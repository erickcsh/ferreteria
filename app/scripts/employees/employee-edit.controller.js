(function () {
  'use strict';

  angular
    .module('ferreteriaApp.employees')
    .controller('EmployeeEditController', EmployeeEditController);

  /* @ngInject */
  function EmployeeEditController($state, $http, $filter) {
    var vm = this;
    vm.employee = {};
    vm.headquarters= {};
    vm.cedula = $state.params.id;
    vm.editEmployee = editEmployee;
    getEmployee();
    loadInfo();

    function editEmployee() {
      $http.put('/api/employee/' + $state.params.id, vm.employee, {})
        .then(function (res) {
          $state.go('employee', { id: $state.params.id });
        }, function () {
        });
    }

    function getEmployee() {
      $http.get('/api/employee/' + $state.params.id, {})
        .then(function (res) {
          vm.employee = res.data[0][0];
          vm.employee.fechaContratado = $filter('date')(vm.employee.fechaContratado, 'd/M/yyyy');
        }, function () {
          vm.employee = {};
        });
    }

    function loadInfo() {
      $http.get('api/employee_types', {})
        .then(function (data) {
          vm.employee_types = data.data[0];
        }, function () {
        });
      $http.get('api/headquarters', {})
        .then(function (data) {
          vm.headquarters = data.data[0];
        }, function () {
        });
    }
  }

})();
