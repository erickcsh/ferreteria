(function () {
  'use strict';

  angular
    .module('ferreteriaApp', [
      'ui.router',
      'ferreteriaApp.authCore',
      'ferreteriaApp.login',
      'ferreteriaApp.products',
      'ferreteriaApp.headquarters'
    ]).config(configStates)
    .controller('HomeController', HomeController);

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
  function HomeController($state, authModel) {
    if (!authModel.user || !authModel.user.username) {
      $state.go('login');
    }
  }

})();
