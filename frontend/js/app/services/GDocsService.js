'use strict';

angular.module('Rubikar').factory('GDocsService', [
  '$http', '$q', 'SGHttpCacheService', 'GDOCS', 'RACES', 'CACHES',
  function($http, $q, SGHttpCacheService, GDOCS, RACES, CACHES){
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
      },
      /**
      * Getting the list of Users in a JSON object
      * have the following properties:
      * user, firstname, lastname, role
      */
      getUsersList: function(){
        var cachedUserList = SGHttpCacheService.get("sgames_users");
        var nowDate = new Date();
        if ( angular.isDefined(cachedUserList) )
        {
          if ( (nowDate.getTime() - cachedUserList.createdOn.getTime()) < CACHES.HTTP_CACHE_TTL )
          {
            var deferred = $q.defer();
            deferred.resolve(cachedUserList.users);
            return deferred.promise;
          }
        }
        return $http.get('/apigdocs/' + GDOCS.GDOCS_USERS).
        then(function(response) {
          cachedUserList = {createdOn: new Date(), users: angular.fromJson(response.data)};
          SGHttpCacheService.put("sgames_users", cachedUserList);
          return cachedUserList.users;
        }, function(response) {
          console.log('getUsersList - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting the list of Points won by users in a JSON object
      * This is the complete list of activities that all users
      * have completed. Must be filtered by the caller.
      */
      getPoints: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_POINTS).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getPoints - gdocs call failed');
          return null;
        });
      },
      /**
      * Getting the list of all Trophies won by all users in a JSON object
      * Must be filtered by the caller.
      */
      getUsersTrophies: function(){
        return $http.get('/apigdocs/' + GDOCS.GDOCS_USERS_TROPHIES).
        then(function(response) {
          return angular.fromJson(response.data);
        }, function(response) {
          console.log('getUsersTrophies - gdocs call failed');
          return null;
        });
      }
    };
  }
]);