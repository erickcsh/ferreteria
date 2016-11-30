(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('SearchController', SearchController);

  /* @ngInject */
  function SearchController($http, $state) {
    var vm = this;
    vm.products = [];
    vm.product = {};
    vm.results = [];
    vm.headquarter = {};
    vm.idSede = $state.params.idSede;
    vm.search = search;
    getInfo();

    function getInfo() {
      $http.get('/api/headquarter/' + vm.idSede, {}).then(function (json) {
        vm.headquarter = json.data[0][0];
      }, function () {
        vm.headquarter = {};
      });
      $http.get('/api/products', {}).then(function (json) {
        vm.products = json.data[0];
      }, function () {
        vm.products = [];
      });
    }

    function search() {
      $http.post('/api/search', { id: vm.product.id, x: vm.headquarter.ubicacion.x, y: vm.headquarter.ubicacion.y}).then(function (json) {
        vm.results = json.data[0];
      }, function () {
      });
    }
  }

})();
