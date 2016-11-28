(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls')
    .controller('HallEditController', HallEditController);

  /* @ngInject */
  function HallEditController($state, $http) {
    var vm = this;
    vm.hall = {};
    vm.editHall = editHall;
    getHall();

    function editHall() {
      $http.put('/api/hall/' + $state.params.id, vm.hall, {})
        .then(function (res) {
          $state.go('hall', { id: $state.params.id });
        }, function () {
        });
    }

    function getHall() {
      $http.get('/api/hall/' + $state.params.id, {})
        .then(function (res) {
          vm.hall = res.data[0][0];
        }, function () {
          vm.hall = {};
        });
    }
  }

})();
