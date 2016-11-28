(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters')
    .controller('HeadquarterController', HeadquarterController);

  /* @ngInject */
  function HeadquarterController($state, $http) {
    var vm = this;
    vm.headquarter = {};
    getHeadquarter();

    function getHeadquarter() {
      $http.get('/api/headquarter/' + $state.params.id, {})
        .then(function (res) {
          vm.headquarter = res.data[0][0];
        }, function () {
        });
    }
  }

})();
