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
      $http.post('api/headquarters', vm.headquarter, {})
        .then(function (data) {
          $state.go('headquarters');
        }, function () {
        });
    }
  }

})();
