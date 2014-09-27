'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:Formtrl
 * @description
 * # FormCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('FormCtrl', ['$scope', 'setCurrPage', function ($scope, setCurrPage) {
    setCurrPage(5);

    $scope.gradu_level = ['小学', '中学', '中专', '高中', '大专本科', '硕士', '博士', '博士后'];

    $scope.employee = {
      name: '',
      gender: '',
      sn: '',
      gradu: '',

      email: '',
      url: '',
      hobbies: {
        swimming: false,
        reading: false,
        running: false,
        sleeping: false
       },

       comment: ''
    };

  }]);
