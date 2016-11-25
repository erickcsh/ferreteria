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
      if (vm.auth.username === 'admin' && vm.auth.password === 'admin') {
        authModel.user = {
          username: vm.auth.username,
          admin: true
        }
        authModel.setCookies();
        $window.location.href = '/#/home';
      } else if (vm.auth.username === 'client') {
        authModel.user = {
          username: vm.auth.username,
          admin: false
        }
        authModel.setCookies();
        $window.location.href = '/#/home';
      } else {
        vm.formData.error = true;
      }
      /*
      $http.get('/api/headquarter/' + $state.params.id, {})
        .then(function (res) {
          vm.product = res.data[0][0];
        }, function () {
          vm.product = {};
        });
       */
    }
  }

})();
