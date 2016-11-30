(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls')
    .controller('HallOrderController', HallOrderController);

  /* @ngInject */
  function HallOrderController($state, $http) {
    var vm = this;
    vm.hall = {};
    vm.products = [];
    vm.idDepartamento = '';
    vm.idSede = '';
    getHall();

    function getHall() {
      $http.get('/api/hall/' + $state.params.id, {})
        .then(function (res) {
          vm.hall = res.data[0][0];
          vm.idDepartamento = vm.hall.idDepartamento;
          $http.get('/api/department/' + vm.idDepartamento, {})
          .then(function (res) {
            vm.idSede= res.data[0][0].idSede;
            $http.get('/api/hall/' + $state.params.id + '/order/' + vm.idSede + '/' + vm.idDepartamento, {})
            .then(function (res) {
              vm.products = res.data[0];
            }, function () {
            });
          }, function () {
          });
        }, function () {
        });
    }
  }

})();
