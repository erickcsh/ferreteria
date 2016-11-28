(function () {
  'use strict';

  angular
    .module('ferreteriaApp.backorders')
    .controller('BackorderNewController', BackorderNewController);

  /* @ngInject */
  function BackorderNewController($state, $http) {
    var vm = this;
    vm.backorder = {};
    vm.createBackorder = createBackorder;

    function createBackorder() {
      $http.post('api/backorders', vm.backorder, {})
        .then(function (data) {
          $state.go('backorders');
        }, function () {
        });
    }
  }

})();
