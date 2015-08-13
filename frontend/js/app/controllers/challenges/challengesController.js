'use strict';
angular.module('Rubikar').controller('ChallengesController', ['$scope', 'GDocsService', function ($scope, GDocsService) {
  GDocsService.getChallengesList().then(function(data){
    $scope.challenges = data;
  });
}])