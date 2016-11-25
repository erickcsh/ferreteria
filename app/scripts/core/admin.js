(function () {
  'use strict';

  angular
    .module('ferreteriaApp.adminCore', ['ferreteriaApp.authCore'])
    .run(authAdmin);

  /* @ngInject */
  function authAdmin($window, authModel) {
    if (!authModel.user || !authModel.user.admin) {
      $window.location.href = '/#/home';
    }
  }

})();

