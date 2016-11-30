(function () {
  'use strict';

  angular
    .module('ferreteriaApp.adminCore', ['ferreteriaApp.authCore'])
    .run(authAdmin);

  /* @ngInject */
  function authAdmin($window, authModel) {
    authModel.loadCookies();
    if (!authModel.user || authModel.user.admin !== 'admin') {
      $window.location.href = '/#/home';
    }
  }

})();

