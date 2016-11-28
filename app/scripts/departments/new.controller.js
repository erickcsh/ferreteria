(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments')
    .controller('DepartmentNewController', DepartmentNewController);

  /* @ngInject */
  function DepartmentNewController($state, $http) {
    var vm = this;
    vm.department = {};
    vm.createDepartment = createDepartment;
    vm.idSede = $state.params.idSede;
    vm.department.idSede = vm.idSede;
    getInfo();

    function createDepartment() {
      $http.post('api/departments', vm.department, {})
        .then(function (data) {
          $state.go('departments', { idSede: vm.idSede });
        }, function () {
        });
    }

    function getInfo() {
      $http.get('api/headquarter/' + vm.idSede, {})
        .then(function (data) {
          vm.department.NombreSede = data.data[0][0].nombre;
        }, function () {
        });
    }
  }

})();
