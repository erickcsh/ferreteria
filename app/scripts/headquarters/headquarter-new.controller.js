(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters')
    .controller('HeadquarterNewController', HeadquarterNewController);

  /* @ngInject */
  function HeadquarterNewController($state, $http) {
    var vm = this;
    vm.headquarter = {};
    vm.createHeadquarter = createHeadquarter;

    function createHeadquarter() {
      var headquarter = {
        nombre: vm.headquarter.nombre,
        point: vm.headquarter.lat + ' ' + vm.headquarter.lon
      }
      $http.post('api/headquarters', headquarter, {})
        .then(function (data) {
          $state.go('headquarters');
        }, function () {
        });
    }
  }

})();
