(function () {
  'use strict';

  angular
    .module('ferreteriaApp.clients')
    .controller('ClientNewController', ClientNewController);

  /* @ngInject */
  function ClientNewController($state, $http) {
    var vm = this;
    vm.client = {};
    vm.createClient = createClient;

    function createClient() {
      $http.post('api/clients', vm.client, {})
        .then(function (data) {
          $state.go('clients');
        }, function () {
        });
    }
  }

})();
