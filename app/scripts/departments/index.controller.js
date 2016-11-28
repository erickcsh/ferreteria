(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments')
    .controller('DepartmentsController', DepartmentsController);

  /* @ngInject */
  function DepartmentsController($http, $state) {
    var vm = this;
    vm.departments = [];
    vm.idSede = $state.params.idSede;
    getDepartments();

    function getDepartments() {
      $http.get('/api/headquarter/' + vm.idSede + '/departments', {}).then(function (json) {
        vm.departments = json.data[0];
      }, function () {
        vm.departments = [];
      });
    }
  }

})();
