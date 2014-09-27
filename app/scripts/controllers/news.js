'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:FilterCtrl
 * @description
 * # MainCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('NewsCtrl', ["$scope", "_", "MyUtil",
    function ($scope, _, MyUtil, Items) {
      MyUtil.setCurrPage(4);

      $scope.data = "News Control.";


  }]);