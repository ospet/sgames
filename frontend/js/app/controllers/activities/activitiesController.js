'use strict';
angular.module('Rubikar').controller('ActivitiesController', ['$scope', '$http', function ($scope, $http) {
  $scope.rawjson = '';
  $http.get('/apigdocs/0By1692QGa-25SFgtbVNsYVo4Mmc').
  then(function(response) {
    $scope.activities = angular.fromJson(response.data);
  }, function(response) {
    console.log('ActivitiesController - godcs call failed');
  });
  
}])