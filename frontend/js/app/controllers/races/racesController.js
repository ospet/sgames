'use strict';
angular.module('Rubikar').controller('RacesController', ['$scope', '$routeParams', 'GDocsService', function ($scope, $routeParams, GDocsService) {
  var race = $routeParams.racetype;
  GDocsService.getRace(race).then(function(data){
    $scope.racers = data;
  });
}])