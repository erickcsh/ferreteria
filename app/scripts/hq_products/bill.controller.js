(function () {
  'use strict';

  angular
    .module('ferreteriaApp.hq_products')
    .controller('PayProductsController', PayProductsController);

  /* @ngInject */
  function PayProductsController($http, $state, shoppingCart, authModel) {
    var vm = this;
    var cart = shoppingCart.getCart();
    var keys = Object.keys(cart);
    vm.products = keys.map(function(v) { return cart[v]; });
    vm.clients = [];
    vm.bill = {};
    vm.bills = [];
    vm.idSede = $state.params.idSede;
    vm.billit = billit;
    getClients();

    function getClients() {
      $http.get('/api/clients', {}).then(function (json) {
        vm.clients = json.data[0];
      }, function () {
        vm.clients = [];
      });
    }

    function billit() {
      getBills(function (bills) {
        vm.bills = bills;
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
        getBills(function (bills) {
          var myArray = bills.filter(function( el ) {
            return !vm.bills.some(function (e) { return e.idPasillo ===  el.idPasillo } );
          });
          var idPedido = myArray[0].idPedido;
          $state.go('pay', { id: idPedido });
        });
      });
    }

    function getBills(callback) {
      $http.get('/api/hq_products/bills', {}).then(function (json) {
        callback(json.data[0]);
      }, function () {
      });
    }
  }

})();
