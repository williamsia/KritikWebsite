'use strict';

angular.module('kritikWebsiteApp')
  .controller('KritikCtrl', function ($scope, $http, socket) {
    $scope.errors = {};

    $scope.addWebsite = function(form) {

        $scope.submitted = true;

        if(form.$valid) {

            $scope.website.imageSrc = "assets/images/website-placeholder.png";

            $http.post('/api/websites', $scope.website)
                .success(function(){
                    $scope.successfullSubmission = true;
                    $scope.website = undefined;         
                    $scope.submitted = false;          
                })
                .error(function(){
                    $scope.successfullSubmission = false;                   
                });
        }

    };

  });
