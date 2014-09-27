angular.module("tstApp")
  .factory('Friends', ['$http', '$resource', function ($http, $resource) {

    var list = [
          {"name": "Heidi", "age": 23, "isSpecial": true},
          {"name": "Craig", "age": 25, "isSpecial": false},
          {"name": "Daniel", "age": 6, "isSpecial": false}
        ];

    function f_6() {
      var friends = $resource('/api/friends.json');
      return friends.query();
    }

    return {
      get1: list,

      get2: function() {
        return list;
      },

      get3: function(cb) {
        $http.get('/api/friends.json').then(function(response) {
          cb(response.data);
        });
      },

      get4: function() {
        return $http.get('/api/friends.json');
      },

      get5: function(cb) {
        return $http.get('/api/friends.json').then(cb);
      },

      get6: f_6
    };
  }])
  .factory("Friends2", ['$http', function($http) {
    var obj = {content:null};

    $http.get('/api/friends.json').success(function(response) {
      obj.content = response.data;
      console.log(response.data);
    });

    return obj;
  }])