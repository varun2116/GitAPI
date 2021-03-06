/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name gitApiApp
   * @description
   * # gitApiApp
   *
   * Main module of the application.
   */
  return angular
    .module('gitApiApp', ['gitApiApp.controllers.MainCtrl',
'gitApiApp.controllers.AboutCtrl',
/*angJSDeps*/ngCookies,ngAria,ngMessages,ngResource,ngSanitize,ngRoute,ngAnimate,ngTouch])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
