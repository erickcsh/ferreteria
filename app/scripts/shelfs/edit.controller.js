(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shelfs')
    .controller('ShelfEditController', ShelfEditController);

  /* @ngInject */
  function ShelfEditController($state, $http) {
    var vm = this;
    vm.shelf = {};
    vm.editShelf = editShelf;
    getShelf();

    function editShelf() {
      $http.put('/api/shelf/' + $state.params.id, vm.shelf, {})
        .then(function (res) {
          $state.go('shelf', { id: $state.params.id });
        }, function () {
        });
    }

    function getShelf() {
      $http.get('/api/shelf/' + $state.params.id, {})
        .then(function (res) {
          vm.shelf = res.data[0][0];
        }, function () {
          vm.shelf = {};
        });
    }
  }

})();
