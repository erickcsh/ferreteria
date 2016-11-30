(function () {
  'use strict';

  angular
    .module('ferreteriaApp.routes')
    .controller('RoutesController', RoutesController);

  /* @ngInject */
  function RoutesController($http, $state) {
    var vm = this;
    vm.routes = [];
    getRoutes();

    function getRoutes() {
      $http.get('/api/routes', {}).then(function (json) {
        vm.routes = json.data[0];
      }, function () {
        vm.routes = [];
      });
    }
  }

})();
