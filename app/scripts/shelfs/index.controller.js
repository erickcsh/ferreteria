(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shelfs')
    .controller('ShelfsController', ShelfsController);

  /* @ngInject */
  function ShelfsController($http, $state) {
    var vm = this;
    vm.shelfs = [];
    vm.idPasillo = $state.params.idPasillo;
    getShelfs();

    function getShelfs() {
      $http.get('/api/hall/' + vm.idPasillo + '/shelfs', {}).then(function (json) {
        vm.shelfs = json.data[0];
      }, function () {
        vm.shelfs = [];
      });
    }
  }

})();
