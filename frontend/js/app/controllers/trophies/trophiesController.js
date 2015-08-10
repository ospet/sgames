'use strict';
angular.module('Rubikar').controller('TrophiesController', ['$scope', '$http', function ($scope, $http) {
  $scope.rawjson = '';
  $http.get('/apigdocs/0By1692QGa-25WlhOeHRVS1lpR0E').
  then(function(response) {
    $scope.trophies = angular.fromJson(response.data);
  }, function(response) {
    console.log('TrophiesController - gdocs call failed');
  });
  
}])