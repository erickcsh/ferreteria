(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shelfs')
    .controller('ShelfNewController', ShelfNewController);

  /* @ngInject */
  function ShelfNewController($state, $http) {
    var vm = this;
    vm.shelf = {};
    vm.createShelf = createShelf;
    vm.idPasillo = $state.params.idPasillo;
    vm.shelf.idPasillo = vm.idPasillo;

    function createShelf() {
      $http.post('api/shelfs', vm.shelf, {})
        .then(function (data) {
          $state.go('shelfs', { idPasillo: vm.idPasillo });
        }, function () {
        });
    }
  }

})();
