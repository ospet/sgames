'use strict';
angular.module('Rubikar').controller('ActivitiesController', ['$scope', '$http', 'GDOCS', function ($scope, $http, GDOCS) {
  $http.get('/apigdocs/' + GDOCS.GDOCS_ACTIVITIES).
  then(function(response) {
    $scope.activities = angular.fromJson(response.data);
  }, function(response) {
    console.log('ActivitiesController - gdocs call failed');
  });
  
}])