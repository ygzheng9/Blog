'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('ListCtrl', ["$scope", "$rootScope", "setCurrPage", function ($scope, $rootScope, setCurrPage) {
    setCurrPage(2);

    $scope.order = {
      "create_time": "1288323623006",
      "pre_pay_time": "2014/05/27 3:20",
      "pay_time": "2014/06/20 1:12",
      "distribution_time": "2014/06/23 22:12",
      "deliver_time": "2014/06/30 2:21",
      "end_time": "2014/07/20 9:23"
    }

    $scope.orderStatus = 1;
    $scope.width = 186;
    $scope.step = 5;

    $scope.processStatus = 1;
    $scope.totalStatus = [0, 1, 2, 3, 4, 5];

    $scope.isShow = true;

    // $scope.processWidth = $scope.width * $scope.processStatus;


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
