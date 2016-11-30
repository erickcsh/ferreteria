(function () {
  'use strict';

  angular
    .module('ferreteriaApp.shoppingCore', [])
    .factory('shoppingCart', shoppingCart);

  /* @ngInject */
  function shoppingCart($window) {
    var model = {
      cleanCart: cleanCart,
      addProduct: addProduct,
      getCart: getCart
    };

    return model;

    function cleanCart()  {
      $window.sessionStorage.setItem('cart', angular.toJson({}));
    }

    function addProduct(product) {
      var cart = getCart();
      if (cart[product.idProducto]) {
        cart[product.idProducto].quantity++;
      } else {
        cart[product.idProducto] = { product: product, quantity: 1 };
      }
      $window.sessionStorage.setItem('cart', angular.toJson(cart));
    }

    function getCart() {
      return angular.fromJson($window.sessionStorage.getItem("cart")) || {};
    }

  }

})();

