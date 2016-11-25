(function () {
  'use strict';

  angular
    .module('ferreteriaApp.authCore', ['ngCookies'])
    .factory('authModel', authModel);

  /* @ngInject */
  function authModel($cookies) {
    var model = {
      user: {},
      loadCookies: loadCookies,
      setCookies: setCookies,
      removeCookies: removeCookies
    };

    loadCookies();

    return model;

    function loadCookies() {
      model.user.username = $cookies.user;
      model.user.type = $cookies.user_type;
    }

    function setCookies() {
      $cookies.user = model.user.username;
      $cookies.user_type = model.user.type;
    }

    function removeCookies() {
      $cookies.user = '';
      $cookies.user_type = '';
    }
  }

})();

