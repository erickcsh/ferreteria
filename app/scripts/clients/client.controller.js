(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clients')
    .controller('ClientController', ClientController);

  /* @ngInject */
  function ClientController($state, $http) {
    var vm = this;
    vm.client = {};
    vm.deleteClient = deleteClient;
    getClient();

    function deleteClient() {
      $http.delete('/api/client/' + $state.params.id, {})
        .then(function (res) {
          $state.go('clients');
        }, function () {
          vm.product = {};
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
