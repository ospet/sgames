'use strict';
 
describe('Home Controller Suite', function() {
  var scope, ctrl;
  var homeController = function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HomeController', {
      $scope: scope
    });
  };
  beforeEach(function() {
    module('Rubikar');
  });
  describe('General Tests', function() {
    beforeEach(function() {
      inject(homeController);
    });
    it('Controller should be defined', function() {
      expect(ctrl).toBeDefined();
    });
    it('foo should have bar', function() {
      expect(scope.foo).toEqual('bar');
    });
  });
});