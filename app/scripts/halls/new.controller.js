(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls')
    .controller('HallNewController', HallNewController);

  /* @ngInject */
  function HallNewController($state, $http) {
    var vm = this;
    vm.hall = {};
    vm.createHall = createHall;
    vm.idDepartamento = $state.params.idDepartamento;
    vm.hall.idDepartamento = vm.idDepartamento;

    function createHall() {
      $http.post('api/halls', vm.hall, {})
        .then(function (data) {
          $state.go('halls', { idDepartamento: vm.idDepartamento });
        }, function () {
        });
    }
  }

})();
