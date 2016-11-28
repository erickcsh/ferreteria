(function () {
  'use strict';

  angular
    .module('ferreteriaApp.authCore', ['ngCookies'])
    .factory('authModel', authModel);

  /* @ngInject */
  function authModel($cookies, $window) {
    var model = {
      user: {},
      loadCookies: loadCookies,
      setCookies: setCookies,
      removeCookies: removeCookies,
      logout: logout
    };

    loadCookies();

    return model;

    function loadCookies() {
      model.user.username = $cookies.user;
      model.user.type = $cookies.user_type;
    }

    function setCookies() {
      $cookies.user = model.user.username;
      $cookies.user_type = model.user.admin;
    }

    function removeCookies() {
      $cookies.user = '';
      $cookies.user_type = '';
    }

    function logout() {
      removeCookies();
      $window.location.href = '/#/login';
    }
  }

})();

