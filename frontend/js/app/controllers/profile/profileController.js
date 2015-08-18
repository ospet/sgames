'use strict';

angular.module('Rubikar').controller('ProfileController', [
  '$scope',
  'GDocsService',
  '$routeParams',
  function($scope, GDocsService, $routeParams){
    $scope.profileName = $routeParams.profileName;
    GDocsService.getHallOfFame().then(function(data){
      $scope.profile = _.find(data, function(value){
        return value.user == $scope.profileName;
      });
    });
  }
]);