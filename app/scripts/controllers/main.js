'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('MainCtrl', ['$scope', 'setCurrPage', function ($scope, setCurrPage) {
    setCurrPage(0);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'another one'
    ];
  }]);
