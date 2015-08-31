'use strict';

angular.module('Rubikar').factory('GDocsService', [
  '$http', 'SGHttpCacheService', 'GDOCS', 'RACES', 'CACHES',
  function($http, SGHttpCacheService, GDOCS, RACES, CACHES){
    return{
      /**
      * Getting the Hall Of Fame in a JSON object
      */
      getHallOfFame: function(){
        return SGHttpCacheService.getCachedItem("sgames_halloffame", GDOCS.API_URL + GDOCS.GDOCS_HALL_OF_FAME);
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
        return SGHttpCacheService.getCachedItem("sgames_races_" + iRaceType, GDOCS.API_URL + gdocid);
      },
      /**
      * Getting the list of Trophies in a JSON object
      */
      getTrophiesList: function(){
        return SGHttpCacheService.getCachedItem("sgames_trophies", GDOCS.API_URL + GDOCS.GDOCS_TROPHIES);
      },
      /**
      * Getting the list of Activities in a JSON object
      */
      getActivitiesList: function(){
        return SGHttpCacheService.getCachedItem("sgames_activities", GDOCS.API_URL + GDOCS.GDOCS_ACTIVITIES);
      },
      /**
      * Getting the list of Challenges in a JSON object
      */
      getChallengesList: function(){
        return SGHttpCacheService.getCachedItem("sgames_challenges", GDOCS.API_URL + GDOCS.GDOCS_CHALLENGES);
      },
      /**
      * Getting the list of Users in a JSON object
      * have the following properties:
      * user, firstname, lastname, role
      */
      getUsersList: function(){
        return SGHttpCacheService.getCachedItem("sgames_users", GDOCS.API_URL + GDOCS.GDOCS_USERS);
      },
      /**
      * Getting the list of Points won by users in a JSON object
      * This is the complete list of activities that all users
      * have completed. Must be filtered by the caller.
      */
      getPoints: function(){
        return SGHttpCacheService.getCachedItem("sgames_points", GDOCS.API_URL + GDOCS.GDOCS_POINTS);
      },
      /**
      * Getting the list of all Trophies won by all users in a JSON object
      * Must be filtered by the caller.
      */
      getUsersTrophies: function(){
        return SGHttpCacheService.getCachedItem("sgames_users_trophies", GDOCS.API_URL + GDOCS.GDOCS_USERS_TROPHIES);
      }
    };
  }
]);