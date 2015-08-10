'use strict';
angular.module('Rubikar').controller('HallOfFameController', ['$scope', '$http', 'GDOCS', function ($scope, $http, GDOCS) {
  $http.get('/apigdocs/' + GDOCS.GDOCS_HALL_OF_FAME).
  then(function(response) {
    $scope.hof = angular.fromJson(response.data);
  }, function(response) {
    console.log(HallOfFameController);
  });
  
}])