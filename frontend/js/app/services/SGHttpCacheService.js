'use strict';

angular.module('Rubikar').factory('SGHttpCacheService', 
[
  '$cacheFactory', 
  'CACHES',
  function($cacheFactory, CACHES){
    return $cacheFactory(CACHES.HTTP_CACHE);
  }
]);