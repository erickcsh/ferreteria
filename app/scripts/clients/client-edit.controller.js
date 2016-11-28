(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clients')
    .controller('ClientEditController', ClientEditController);

  /* @ngInject */
  function ClientEditController($state, $http) {
    var vm = this;
    vm.client = {};
    vm.editClient = editClient;
    getClient();

    function editClient() {
      $http.put('/api/client/' + $state.params.id, vm.client, {})
        .then(function (res) {
          $state.go('client', { id: $state.params.id });
        }, function () {
        });
    }

    function getClient() {
      $http.get('/api/client/' + $state.params.id, {})
        .then(function (res) {
          vm.client = res.data[0][0];
        }, function () {
          vm.client = {};
        });
    }
  }

})();
