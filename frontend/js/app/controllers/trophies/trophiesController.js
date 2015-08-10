'use strict';
angular.module('Rubikar').controller('TrophiesController', ['$scope', '$http', 'GDOCS', function ($scope, $http, GDOCS) {
  $http.get('/apigdocs/' + GDOCS.GDOCS_TROPHIES).
  then(function(response) {
    $scope.trophies = angular.fromJson(response.data);
  }, function(response) {
    console.log('TrophiesController - gdocs call failed');
  });
  
}])