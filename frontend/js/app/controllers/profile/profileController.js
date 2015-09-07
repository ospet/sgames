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
      $scope.userNbOfTrophies = 0;
      if ( angular.isDefined($scope.profile) )
      {
        $scope.userNbOfTrophies = $scope.profile.bronze + $scope.profile.silver + $scope.profile.gold + $scope.profile.platinum + $scope.profile.adamantium;
      }
      GDocsService.getTrophiesList().then(function(data){
        var alltrophies = data;
        $scope.userTrophiesPercent = Math.floor($scope.userNbOfTrophies / alltrophies.length * 100);
      });
    });
    
    GDocsService.getUsersList().then(function(data){
      $scope.userdata = _.find(data, function(value){
        return value.user == $scope.profileName;
      });
    });
    
    GDocsService.getUsersTrophies().then(function(data){
      $scope.trophies = _.chain(data)
      .filter(function(value){
        return (value.user == $scope.profileName && value.quarter == quarter);
      })
      .sortBy(function(value) {
        return value.month;
      })
      .reverse()
      .value();
      
      $scope.userAllTimeTrophies = _.chain(data)
      .filter(function(value){
        return (value.user == $scope.profileName);
      })
      .sortBy(function(value) {
        return value.quarter;
      })
      .reverse()
      .value();
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
      $scope.userPoints = 0;
      _.each(activities, function(activity) {
        $scope.userPoints += activity.points;
      });
      $scope.userAllTimePoints = 0;
      _.chain(data)
      .filter(function(value){
        return (value.user == $scope.profileName);
      })
      .each(function(activity) {
        $scope.userAllTimePoints += activity.points;
      });
    });
  }
]);