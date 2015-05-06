'use strict';

/**
 * @ngdoc overview
 * @name vineApp
 * @description
 * # vineApp
 *
 * Main module of the application.
 */
var vineApp = angular
  .module('vineApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
