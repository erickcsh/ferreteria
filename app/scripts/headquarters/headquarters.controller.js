(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters')
    .controller('HeadquartersController', HeadquartersController);

  /* @ngInject */
  function HeadquartersController($http) {
    var vm = this;
    vm.headquarters = [];
    getHeadquarters();

    function getHeadquarters() {
      $http.get('/api/headquarters', {}).then(function (json) {
        vm.headquarters = json.data[0];
      }, function () {
        vm.headquarters = [];
      });
    }
  }

})();
