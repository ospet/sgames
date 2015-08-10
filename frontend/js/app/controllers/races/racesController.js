'use strict';
angular.module('Rubikar').controller('RacesController', ['$scope', '$http', '$routeParams', 'GDOCS', 'RACES', function ($scope, $http, $routeParams, GDOCS, RACES) {
  var race = $routeParams.racetype;
  var gdocid = '';
  switch (race)
  {
    case RACES.RACE_DEV:
      gdocid = GDOCS.GDOCS_RACE_DEV;
      break;
    case RACES.RACE_QA:
      gdocid = GDOCS.GDOCS_RACE_QA;
      break;
    default:
      break;
  }
  if ( gdocid != '')
  {
    $http.get('/apigdocs/' + gdocid).
    then(function(response) {
      $scope.racers = angular.fromJson(response.data);
    }, function(response) {
      console.log('RacesController - gdocs call failed');
    });
  }
  else
    console.log('RacesController - Not a valid race');
}])