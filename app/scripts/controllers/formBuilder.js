'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:FormBuilderctrl
 * @description
 * # FormBuilderCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('FormBuilderCtrl', ['$scope', 'setCurrPage', function ($scope, setCurrPage) {
    setCurrPage(6);

    $scope.ColourOptions = ['Blue', 'Brown', 'Green', 'Hazel'];

  }]);
