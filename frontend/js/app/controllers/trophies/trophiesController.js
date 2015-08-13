'use strict';
angular.module('Rubikar').controller('TrophiesController', ['$scope', 'GDocsService', function ($scope, GDocsService) {
  GDocsService.getTrophiesList().then(function(data){
    $scope.trophies = data;
  });
}])