'use strict';

angular.module('kritikWebsiteApp')
  .controller('KritikCtrl', function ($scope, $http, socket) {
    $scope.errors = {};

    $scope.addWebsite = function() {
        if($scope.form === undefined) {
            return;
        }
        $http.post('/api/websites', $scope.website );
        $scope.form = undefined;
    };


  });
