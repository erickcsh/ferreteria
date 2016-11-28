(function () {
  'use strict';

  angular
    .module('ferreteriaApp.backorders')
    .controller('BackordersController', BackordersController);

  /* @ngInject */
  function BackordersController($http) {
    var vm = this;
    vm.backorders = [];
    getBackorders();

    function getBackorders() {
      $http.get('/api/backorders', {}).then(function (json) {
        vm.backorders = json.data[0];
      }, function () {
        vm.backorders = [];
      });
    }
  }

})();
