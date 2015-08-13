'use strict';
angular.module('Rubikar').controller('ActivitiesController', ['$scope', 'GDocsService', function ($scope, GDocsService) {
  GDocsService.getActivitiesList().then(function(data){
    $scope.activities = data;
  });
}])