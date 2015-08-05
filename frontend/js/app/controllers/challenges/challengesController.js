'use strict';
angular.module('Rubikar').controller('ChallengesController', ['$scope', '$http', function ($scope, $http) {
  $scope.rawjson = '';
  $http.get('/apigdocs/0By1692QGa-25THlfNlU5Z0lLTE0').
  then(function(response) {
    $scope.challenges = angular.fromJson(response.data);
  }, function(response) {
    console.log('ChallengesController - godcs call failed');
  });
  
}])