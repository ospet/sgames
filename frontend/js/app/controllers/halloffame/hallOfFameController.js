'use strict';
angular.module('Rubikar').controller('HallOfFameController', ['$scope', 'GDocsService', function ($scope, GDocsService) {
  GDocsService.getUsersList().then(function(usersList){
    GDocsService.getHallOfFame().then(function(data){
      $scope.hof = data;
      _.each($scope.hof, function(hentry) {
        var matchedUser = _.find(usersList, function(elt) {
          return elt.user == hentry.user;
        });
        hentry.firstname = hentry.user;
        hentry.lastname = '';
        if ( angular.isDefined(matchedUser) ) {
          hentry.firstname = matchedUser.firstname;
          hentry.lastname = matchedUser.lastname;
        }
      });
    });
  });
}])