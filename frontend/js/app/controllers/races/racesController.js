'use strict';
angular.module('Rubikar').controller('RacesController', ['$scope', '$routeParams', 'GDocsService', function ($scope, $routeParams, GDocsService) {
  var race = $routeParams.racetype;
  GDocsService.getUsersList().then(function(usersList){
    GDocsService.getRace(race).then(function(data){
      $scope.racers = data;
      _.each($scope.racers, function(racer) {
        var matchedUser = _.find(usersList, function(elt) {
          return elt.user == racer.user;
        });
        racer.firstname = matchedUser.firstname;
        racer.lastname = matchedUser.lastname;
      });
    });
  });
}])