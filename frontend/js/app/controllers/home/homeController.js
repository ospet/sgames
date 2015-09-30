'use strict';
angular.module('Rubikar').controller('HomeController', [
  '$scope', 
  'GDocsService',
  'UtilsService', 
  function ($scope, GDocsService, UtilsService) {
    var quarter = UtilsService.getCurrentQuarter();
    
    // ensure that we got the list of users before getting trophies and points
    GDocsService.getUsersList().then(function(usersList){
    
      GDocsService.getTrophiesList().then(function(alltroph){
        var allTrophies = alltroph;
        GDocsService.getUsersTrophies().then(function(data){
          var cachedUser = {user: "", firstname: "", lastname: ""}; // the last user found so we do not need to .find always       
          var trophies = _.chain(data)
          .filter(function(value){
            return value.quarter == quarter;
          })
          .sortBy(function(value) { // this is to get all trophies for the same user together, then easier to use cached username
            return value.user;
          })
          .each(function(trophy) {
            if ( trophy.user != cachedUser.user )
            {
              cachedUser = _.find(usersList, function(elt) {
                return elt.user == trophy.user;
              });
            }
            trophy.firstname = cachedUser.firstname;
            trophy.lastname = cachedUser.lastname;
            var matchedTrophy = _.find(allTrophies, function(elt) {
              return elt.trophy == trophy.achievement;
            });
            trophy.description = matchedTrophy.description;
          })
          .sortBy(function(value) {
            return value.month;
          })
          .reverse()
          .value();
          $scope.trophies = trophies;
        });
      });
      
      GDocsService.getPoints().then(function(data){
        var cachedUser = {user: "", firstname: "", lastname: ""};
        var activities = _.chain(data)
        .filter(function(value){
          return value.quarter == quarter;
        })
        .sortBy(function(value) { // this is to get all activities for the same user together, then easier to use cached username
          return value.user;
        })
        .each(function(activity) {
          if ( activity.user != cachedUser.user )
          {
            cachedUser = _.find(usersList, function(elt) {
              return elt.user == activity.user;
            });
          }
          activity.firstname = cachedUser.firstname;
          activity.lastname = cachedUser.lastname;
        })
        .sortBy(function(value) {
          return value.month;
        })
        .reverse()
        .value();
        $scope.activities = activities;
      });
      
    });
    
}])