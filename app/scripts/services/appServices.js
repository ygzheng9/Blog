'use strict';

var appServices = angular.module('appServices', []);

appServices.factory('setCurrPage', ['$rootScope', function ($rootScope) {
  return function (currPage) {
    $rootScope.curr = [0,0,0];
    $rootScope.curr[currPage] = 1;
  };
}])
.factory('MyUtil', ['$rootScope', function($rootScope) {
  function f_setCurrPage(currPage) {
    $rootScope.curr = [0,0,0,0];
    $rootScope.curr[currPage] = 1;
  }

  return {
      setCurrPage: f_setCurrPage
  };
}]);