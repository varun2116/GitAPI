define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name gitApiApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the gitApiApp
   */
  angular.module('gitApiApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
