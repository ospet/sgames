'use strict';
angular.module('Rubikar').controller('ChallengesController', ['$scope', '$http', 'GDOCS', function ($scope, $http, GDOCS) {
  $http.get('/apigdocs/' + GDOCS.GDOCS_CHALLENGES).
  then(function(response) {
    $scope.challenges = angular.fromJson(response.data);
  }, function(response) {
    console.log('ChallengesController - gdocs call failed');
  });
  
}])