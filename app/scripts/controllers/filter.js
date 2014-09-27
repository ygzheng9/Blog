'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:FilterCtrl
 * @description
 * # MainCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('FilterCtrl', ["$scope", "_", "MyUtil", "Items",
    function ($scope, _, MyUtil, Items) {
      MyUtil.setCurrPage(3);

      $scope.data = "Filter Control.";

      $scope.hasChild = false;

      $scope.categories = Items.getAllCategories();
      $scope.items = Items.getAllItems();

      $scope.currCate = {};
      $scope.currItem = {};

      $scope.chgCate = function(cate) {
        var children = _.where($scope.items, {category: cate});
        $scope.hasChild = (_.size(children) > 0);
        $scope.currItem = {};
      }

      $scope.isCateSelected = function(c) {
        if ( angular.isObject($scope.currCate) && $scope.currCate.hasOwnProperty('name') ) {
          return ($scope.currCate.name === c);
        } else {
          return false;
        }
      }

      $scope.isItemSelected = function(i) {

        if ( angular.isObject($scope.currItem) && $scope.currItem.hasOwnProperty('name') ) {
          return ($scope.currItem.name === i);
        } else {
          return false;
        }
      }
  }]);