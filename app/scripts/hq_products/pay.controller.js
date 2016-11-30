(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('PaymentController', PaymentController);

  /* @ngInject */
  function PaymentController($http, $state) {
    var vm = this;
    vm.payment = {};
    vm.products = [];
    vm.paid = false;
    vm.total = 0;
    vm.order = {};
    vm.idPedido = $state.params.id;
    vm.pay = pay;
    getOrder();

    function getOrder() {
      $http.get('/api/bill/' + vm.idPedido, {}).then(function (json) {
        vm.order = json.data[0][0];
      }, function () {
        vm.order = {};
      });
      $http.get('/api/bill_products/' + vm.idPedido, {}).then(function (json) {
        vm.products = json.data[0];
        vm.products.forEach(function (prod) {
          vm.total += prod.cantidadSolicitada * prod.precioVenta;
        });
      }, function () {
        vm.products = [];
        vm.total = 0;
      });
    }

    function pay() {
      var data = {
        cedCliente: vm.order.cedCliente,
        idPedido: vm.idPedido,
        detalle: vm.payment.detalle,
        tarjeta: vm.payment.tarjeta
      };
      $http.post('/api/add_bill', data, {}).then(function (json) {
        vm.paid = true;
      }, function (err) {
      });
    }

    function getPayments(callback) {
      $http.get('/api/payments', {}).then(function (json) {
        callback(json.data[0]);
      }, function () {
      });
    }
  }

})();
