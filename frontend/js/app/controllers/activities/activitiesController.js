'use strict';
angular.module('Rubikar').controller('ActivitiesController', ['$scope', '$http', function ($scope, $http) {
  $scope.rawjson = '';
  $http.get('/apigdocs/0By1692QGa-25SFgtbVNsYVo4Mmc').
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.rawjson = response.data;
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('failed');
  });
  
}])