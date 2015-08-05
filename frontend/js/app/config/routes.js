'use strict';

angular.module('Rubikar').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'js/app/views/home/home.html',
      controller: 'HomeController'
    })
    .when('/trophies', {
      templateUrl: 'js/app/views/trophies/list.html',
      controller: 'TrophiesController'
    })
    .when('/activities', {
      templateUrl: 'js/app/views/activities/list.html',
      controller: 'ActivitiesController'
    })
    .when('/challenges', {
      templateUrl: 'js/app/views/challenges/list.html',
      controller: 'ChallengesController'
    })
    .otherwise({ redirectTo: '/home' });
}]);
