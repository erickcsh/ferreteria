(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clients')
    .controller('ClientsController', ClientsController);

  /* @ngInject */
  function ClientsController($http) {
    var vm = this;
    vm.clients = [];
    getClients();

    function getClients() {
      $http.get('/api/clients', {}).then(function (json) {
        vm.clients = json.data[0];
      }, function () {
        vm.clients = [];
      });
    }
  }

})();
