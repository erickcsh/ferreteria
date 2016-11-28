(function () {
  'use strict';

  angular
    .module('ferreteriaApp.backorders')
    .controller('BackorderEditController', BackorderEditController);

  /* @ngInject */
  function BackorderEditController($state, $http) {
    var vm = this;
    vm.backorder = {};
    vm.editBackorder = editBackorder;
    getBackorder();

    function editBackorder() {
      $http.put('/api/backorder/' + $state.params.id, vm.backorder, {})
        .then(function (res) {
          $state.go('backorder', { id: $state.params.id });
        }, function () {
        });
    }

    function getBackorder() {
      $http.get('/api/backorder/' + $state.params.id, {})
        .then(function (res) {
          vm.backorder = res.data[0][0];
        }, function () {
          vm.backorder = {};
        });
    }
  }

})();
