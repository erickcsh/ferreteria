(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('HQProductNewController', HQProductNewController);

  /* @ngInject */
  function HQProductNewController($state, $http) {
    var vm = this;
    vm.hq_product = {};
    vm.idSede = $state.params.idSede;
    vm.halls = [];
    vm.products = [];
    vm.createHQProduct = createHQProduct;
    loadInfo();

    function createHQProduct() {
      $http.post('api/hq_products', vm.hq_product, {})
        .then(function (data) {
          $state.go('hq_products', ({ idSede: vm.idSede }));
        }, function () {
        });
    }

    function loadInfo() {
      $http.get('api/headquarter/' + vm.idSede + '/halls', {})
        .then(function (data) {
          vm.halls = data.data[0];
        }, function () {
        });
      $http.get('api/products', {})
        .then(function (data) {
          vm.products = data.data[0];
        }, function () {
        });
    }
  }

})();
