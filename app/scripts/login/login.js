(function () {
  'use strict';

  angular
    .module('ferreteriaApp.login', ['ferreteriaApp.authCore'])
    .config(configRoutes)
    .controller('LoginController', LoginController);

  /* @ngInject */
  function configRoutes($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './scripts/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });
  }

  /* @ngInject */
  function LoginController($window, $http, authModel) {
    var vm = this;
    authModel.user = {};
    authModel.removeCookies();
    vm.auth = {};
    vm.formData = {
      error: ''
    };
    vm.login = login;

    function login() {
      vm.error = false;
      $http.post('/api/login/', vm.auth, {})
        .then(function (res) {
          var auth = res.data[0][0];
          if (auth && auth.nombreUsuario) {
            authModel.user = {
              username: auth.nombreUsuario,
              id: auth.idCliente,
              admin: auth.admin ? 'admin' : ''
            }
            authModel.setCookies();
            $window.location.href = '/#/home';
          } else {
            vm.formData.error = true;
          }
        }, function () {
          vm.formData.error = true;
        });
    }
  }

})();
