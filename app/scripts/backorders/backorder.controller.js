(function () {
  'use strict';

  angular
    .module('ferreteriaApp.backorders')
    .controller('BackorderController', BackorderController);

  /* @ngInject */
  function BackorderController($state, $http) {
    var vm = this;
    vm.backorder = {};
    vm.deleteBackorder = deleteBackorder;
    getBackorder();

    function deleteBackorder() {
      $http.delete('/api/backorder/' + $state.params.id, {})
        .then(function (res) {
          $state.go('backorders');
        }, function () {
          vm.product = {};
        });
    }
    function getBackorder() {
      $http.get('/api/backorder/' + $state.params.id, {})
        .then(function (res) {
          vm.backorder = res.data[0][0];
        }, function () {
        });
    }
  }

})();
