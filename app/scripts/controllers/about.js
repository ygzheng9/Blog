'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('AboutCtrl', ['$http', '$scope', 'setCurrPage', 'Friends', '$resource', '_',
    function ($http, $scope, setCurrPage, Friends, $resource, _) {
      setCurrPage(1);

      $scope.items = ['apple', 'orange', 'banana'];
      $scope.selectedValue = 'orange';

      // $scope.friends = Friends.get1;
      // $scope.friends = Friends.get2();

      // Friends.get3(function(data) {
      //   $scope.friends = data;
      //   });

      // Friends.get4().then(function(response) {
      //   $scope.friends = response.data;
      // });

      // Friends.get5(function(response) {
      //   $scope.friends = response.data;
      // });

      // $scope.friends = $resource('/api/friends.json').query();

      $scope.friends = Friends.get6();

      $scope.friend = {
        name: '',
        age: '',
        isSpecial: false
      };
      $scope.selected = false;

      $scope.save = function() {
        console.log(JSON.stringify($scope.friends));

        $http.post('/api/friends', $scope.friends);
      };

      $scope.addNew = function() {
        // alert('asdf');

        var a = angular.copy($scope.friend);
        $scope.friends.splice(1, 0, a);

        $scope.friends = _.sortBy($scope.friends, function(friend) {
          return friend.name.toUpperCase();
        });

        $scope.clear();
      };

      $scope.chkMe = function(idx) {
        $scope.friend = $scope.friends[idx];
        $scope.selected = true;
      };

      $scope.clear = function () {
        $scope.selected = false;

        $scope.friend = {
          name: '',
          age: '',
          isSpecial: false
        };
      };

  }]);
