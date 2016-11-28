(function () {
  'use strict';

  angular
    .module('ferreteriaApp.halls')
    .controller('HallsController', HallsController);

  /* @ngInject */
  function HallsController($http, $state) {
    var vm = this;
    vm.halls = [];
    vm.idDepartamento = $state.params.idDepartamento;
    getHalls();

    function getHalls() {
      $http.get('/api/department/' + vm.idDepartamento + '/halls', {}).then(function (json) {
        vm.halls = json.data[0];
      }, function () {
        vm.halls = [];
      });
    }
  }

})();
