'use strict';

angular.module('Rubikar').factory('GDocsService', 
[
  '$http', 'GDOCS', 'RACES', 
  function($http, GDOCS, RACES){
    return{
      /**
      * Getting the Hall Of Fame in a JSON object
      */
      getHallOfFame: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_HALL_OF_FAME).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getHallOfFame - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting any race in a JSON object
      * @param iRaceType: race to retrieve, e.g. dev, qa 
      */
      getRace: function(iRaceType){
        var gdocid = GDOCS.GDOCS_RACE_DEV;
        switch (iRaceType)
        {
          case RACES.RACE_DEV:
            gdocid = GDOCS.GDOCS_RACE_DEV;
            break;
          case RACES.RACE_QA:
            gdocid = GDOCS.GDOCS_RACE_QA;
            break;
          default:
            gdocid = GDOCS.GDOCS_RACE_DEV;
            break;
        }
        return $http.get('/apigdocs/' + gdocid).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getRace - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting the list of Trophies in a JSON object
      */
      getTrophiesList: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_TROPHIES).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getTrophiesList - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting the list of Activities in a JSON object
      */
      getActivitiesList: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_ACTIVITIES).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getActivitiesList - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting the list of Challenges in a JSON object
      */
      getChallengesList: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_CHALLENGES).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getChallengesList - gdocs call failed');
          return null;
        });
      }
    };
  }
]);