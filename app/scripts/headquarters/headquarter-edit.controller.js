(function () {
  'use strict';

  angular
    .module('ferreteriaApp.headquarters')
    .controller('HeadquarterEditController', HeadquarterEditController);

  /* @ngInject */
  function HeadquarterEditController($state) {
    var vm = this;
    vm.headquarter = {};
    vm.editHeadquarter = editHeadquarter;
    getHeadquarter();

    function editHeadquarter() {
      var headquarter = {
        nombre: vm.headquarter.nombre,
        point: vm.headquarter.lat + ' ' + vm.headquarter.lon
      }
      $http.put('/api/headquarter/' + $state.params.id, headquarter, {})
        .then(function (res) {
          $state.go('product', { id: $state.params.id });
        }, function () {
        });
    }

    function getHeadquarter() {
      $http.get('/api/headquarter/' + $state.params.id, {})
        .then(function (res) {
          vm.headquarter = res.data[0][0];
        }, function () {
          vm.headquarter = {};
        });
    }
  }

})();
