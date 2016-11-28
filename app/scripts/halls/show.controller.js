(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls')
    .controller('HallController', HallController);

  /* @ngInject */
  function HallController($state, $http) {
    var vm = this;
    vm.hall = {};
    vm.idDepartamento = '';
    vm.deleteHall = deleteHall;
    getHall();

    function deleteHall() {
      $http.delete('/api/hall/' + $state.params.id, {})
        .then(function (res) {
          $state.go('halls', { idDepartamento: vm.idDepartamento });
        }, function () {
          vm.product = {};
        });
    }
    function getHall() {
      $http.get('/api/hall/' + $state.params.id, {})
        .then(function (res) {
          vm.hall = res.data[0][0];
          vm.idDepartamento = vm.hall.idDepartamento;
        }, function () {
        });
    }
  }

})();
