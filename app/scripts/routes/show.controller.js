(function () {
  'use strict';

  angular
    .module('ferreteriaApp.routes')
    .controller('RouteController', RouteController)
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        libraries: 'geometry,visualization'
      });
    });

  /* @ngInject */
  function RouteController($state, $http, uiGmapGoogleMapApi) {
    var vm = this;
    vm.route = {};
    vm.positions = [];
    vm.conf = { stroke: { color: '#6060FB', weight: 3 }, visible: true, fit: true };
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    getRoute();

    function getRoute() {
      $http.get('/api/route/' + $state.params.id, {})
        .then(function (res) {
          vm.route = res.data[0][0];
        }, function () {
        });
      $http.get('/api/route/' + $state.params.id + '/positions', {})
        .then(function (res) {
          uiGmapGoogleMapApi.then(function () {
            vm.positions = res.data[0].map(function (r) {
              return { latitude: r.ubicacion.x, longitude: r.ubicacion.y };
            });
            vm.map = { center: { latitude: vm.positions[0].latitude, longitude: vm.positions[0].longitude }, zoom: 8 };
          });
        }, function () {
        });
    }
  }

})();
