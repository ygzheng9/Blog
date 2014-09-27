'use strict';

/**
 * @ngdoc overview
 * @name tstApp
 * @description
 * # tstApp
 *
 * Main module of the application.
 */
var tstApp = angular
  .module('tstApp', [
    'ngResource',
    'ngRoute',
    'appServices',
    'underscore',
    'ngGrid'
  ]);

tstApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl' //,
        // resolve: {
        //   friends: ['$http', function($http) {
        //     return $http.get('/api/friends.json').then(function(response) {
        //       return response.data;
        //     });
        //   }]
        // }
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/filter', {
        templateUrl: 'views/filter.html',
        controller: 'FilterCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/formBuilder', {
        templateUrl: 'views/formBuilder.html',
        controller: 'FormBuilderCtrl'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl'
      })
      .when('/ulList', {
        templateUrl: 'views/ulList.html',
        controller: 'GridCtrl'
      })
      .when('/gaps', {
        templateUrl: 'views/gaps.html',
        controller: 'GridCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
