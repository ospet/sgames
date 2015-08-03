'use strict';

angular.module('Rubikar').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'js/app/views/home/home.html',
      controller: 'HomeController'
    })
    .otherwise({ redirectTo: '/home' });
}]);
