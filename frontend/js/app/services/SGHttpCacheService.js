'use strict';

angular.module('Rubikar').factory('SGHttpCacheService', 
[
  '$http',
  '$q',
  '$cacheFactory', 
  'CACHES',
  function($http, $q, $cacheFactory, CACHES){
    var internalCache = $cacheFactory(CACHES.HTTP_CACHE);
    return {
      getCachedItem: function(key, apiUrl) {
        var item = internalCache.get(key);
        var nowDate = new Date();
        if ( angular.isDefined(item) )
        {
          if ( (nowDate.getTime() - item.createdOn.getTime()) < CACHES.HTTP_CACHE_TTL )
          {
            var deferred = $q.defer();
            deferred.resolve(item.value);
            return deferred.promise;
          }
        }
        return $http.get(apiUrl).
        then(function(response) {
          var item = {createdOn: new Date(), value: angular.fromJson(response.data)};
          internalCache.put(key, item);
          return item.value;
        }, function(response) {
          console.log(apiUrl + ' - gdocs call failed');
          return null;
        });
      }
    };
  }
]);