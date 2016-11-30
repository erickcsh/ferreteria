(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('PaymentController', PaymentController);

  /* @ngInject */
  function PaymentController($http, $state) {
    var vm = this;
    vm.payment = {};
    vm.payments = [];
    vm.products = [];
    vm.total = 0;
    vm.order = {};
    vm.idPedido = $state.params.id;
    vm.pay = pay;
    getOrder();

    function getOrder() {
      $http.get('/api/bill/' + vm.idPedido, {}).then(function (json) {
        vm.order = json.data[0];
      }, function () {
        vm.order = {};
      });
      $http.get('/api/bill_products/' + vm.idPedido, {}).then(function (json) {
        vm.clients = json.data[0];
      }, function () {
        vm.products = [];
        vm.total = 0;
      });
    }

    function pay() {
      getPayments(function (payments) {
        vm.payments = payments;
        var data = {};
        var prod = {};
        var finished = false;
        var employeeId = authModel.user.id;
        for (var i = 0; i < vm.products.length; i++) {
          prod = vm.products[i];
          finished = false;
          data = {
            cedCliente: vm.bill.cedCliente,
            cedEmpleado: employeeId,
            nombreProducto: prod.product.Producto,
            nombreSede: prod.product.Sede,
            idPasillo: prod.product.idPasillo,
            cantidad: prod.quantity
          }
          $http.post('/api/hq_products/bill', data, {}).then(function (json) {
            finished = true;
          }, function (err) {
            finished = true;
          });

          //while (!finished) {};
        };
        shoppingCart.cleanCart();
        getPayments(function (payments) {
          var myArray = payments.filter(function( el ) {
            return !vm.payments.some(function (e) { return e.idPasillo ===  el.idPasillo } );
          });
          var idFactura = myArray[0].idfactura;
        });
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
