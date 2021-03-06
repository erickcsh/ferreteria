(function () {
  'use strict';

  angular
    .module('ferreteriaApp', [
      'ui.router',
      'ferreteriaApp.authCore',
      'ferreteriaApp.shoppingCore',
      'ferreteriaApp.clientSection',
      'ferreteriaApp.login',
      'ferreteriaApp.products',
      'ferreteriaApp.hq_products',
      'ferreteriaApp.headquarters',
      'ferreteriaApp.brands',
      'ferreteriaApp.cars',
      'ferreteriaApp.car_brands',
      'ferreteriaApp.car_models',
      'ferreteriaApp.employees',
      'ferreteriaApp.backorders',
      'ferreteriaApp.departments',
      'ferreteriaApp.routes',
      'ferreteriaApp.halls',
      'ferreteriaApp.shelfs',
      'ferreteriaApp.employee_types',
      'ferreteriaApp.clients'
    ]).config(configStates)
    .controller('HomeController', HomeController)
    .directive('headerBar', headerBar);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './home.html',
        controller: 'HomeController'
      });
  }

  /* @ngInject */
  function HomeController($state, authModel, $window) {
    if (!authModel.user || !authModel.user.username) {
      $state.go('login');
    } else if (authModel.user.admin !== 'admin') {
      $window.location.href = '/#/user/home';
    }
  }

  /* @ngInject */
  function headerBar($rootScope, authModel, shoppingCart) {
    function logout() {
      shoppingCart.cleanCart();
      authModel.logout();
    }

    function link(scope) {
      scope.user = authModel.user;

      $rootScope.$watch(function () {
        return authModel.user;
      }, function () {
        scope.user = authModel.user;
      });

      scope.logout = logout;
    }

    return {
      restrict: 'E',
      templateUrl: './header-bar.html',
      link: link
    };
  }

})();
