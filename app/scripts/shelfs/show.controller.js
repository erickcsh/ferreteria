(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shelfs')
    .controller('ShelfController', ShelfController);

  /* @ngInject */
  function ShelfController($state, $http) {
    var vm = this;
    vm.shelf = {};
    vm.idPasillo = '';
    vm.deleteShelf = deleteShelf;
    getShelf();

    function deleteShelf() {
      $http.delete('/api/shelf/' + $state.params.id, {})
        .then(function (res) {
          $state.go('shelfs', { idPasillo: vm.idPasillo });
        }, function () {
          vm.product = {};
        });
    }
    function getShelf() {
      $http.get('/api/shelf/' + $state.params.id, {})
        .then(function (res) {
          vm.shelf = res.data[0][0];
          vm.idPasillo = vm.shelf.idPasillo;
        }, function () {
        });
    }
  }

})();
