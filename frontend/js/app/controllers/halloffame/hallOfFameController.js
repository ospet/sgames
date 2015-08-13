'use strict';
angular.module('Rubikar').controller('HallOfFameController', ['$scope', 'GDocsService', function ($scope, GDocsService) {
  GDocsService.getHallOfFame().then(function(data){
    $scope.hof = data;
  });
}])