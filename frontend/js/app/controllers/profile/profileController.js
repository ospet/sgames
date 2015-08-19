'use strict';

angular.module('Rubikar').controller('ProfileController', [
  '$scope',
  'GDocsService',
  'UtilsService',
  '$routeParams',
  function($scope, GDocsService, UtilsService, $routeParams){
    $scope.profileName = $routeParams.profileName;    
    var quarter = UtilsService.getCurrentQuarter();
    
    GDocsService.getHallOfFame().then(function(data){
      $scope.profile = _.find(data, function(value){
        return value.user == $scope.profileName;
      });
    });
    
    GDocsService.getUsersList().then(function(data){
      $scope.userdata = _.find(data, function(value){
        return value.user == $scope.profileName;
      });
    });
    
    GDocsService.getUsersTrophies().then(function(data){
      var trophies = _.chain(data)
      .filter(function(value){
        return (value.user == $scope.profileName && value.quarter == quarter);
      })
      .sortBy(function(value) {
        return value.month;
      })
      .reverse()
      .value();
      $scope.trophies = trophies;
    });
    
    GDocsService.getPoints().then(function(data){
      var activities = _.chain(data)
      .filter(function(value){
        return (value.user == $scope.profileName && value.quarter == quarter);
      })
      .sortBy(function(value) {
        return value.month;
      })
      .reverse()
      .value();
      $scope.activities = activities;
    });
  }
]);