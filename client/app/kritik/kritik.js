'use strict';

angular.module('kritikWebsiteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/kritik', {
        templateUrl: 'app/kritik/kritik.html',
        controller: 'KritikCtrl'
      });
  });