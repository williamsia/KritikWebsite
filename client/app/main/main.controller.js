'use strict';

angular.module('kritikWebsiteApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

      $scope.websites = [];

    $http.get('/api/websites').success(function(websites) {
      $scope.websites = websites;
      //socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.$on('$destroy', function () {
      //socket.unsyncUpdates('thing');
    });
  });
