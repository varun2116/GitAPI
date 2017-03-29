define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gitApiApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gitApiApp
   */
  angular.module('gitApiApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
