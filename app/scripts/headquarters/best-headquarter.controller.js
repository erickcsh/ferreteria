(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters')
    .controller('BestHeadquarterController', BestHeadquarterController);

  /* @ngInject */
  function BestHeadquarterController($state, $http) {
    var vm = this;
    vm.headquarter = {};
    getHeadquarter();

    function getHeadquarter() {
      $http.get('/api/best-headquarter/', {})
        .then(function (res) {
          vm.headquarter = res.data[0][0];
        }, function () {
        });
    }
  }

})();
