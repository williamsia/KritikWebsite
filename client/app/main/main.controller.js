'use strict';

angular.module('kritikWebsiteApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

      $scope.websites = [{
           url : "http://wwww.testwebsite.com",
           imageSrc : "https://74bbd17f2e1902a4c028-a6156ca8b78f6368db7d34474b00f9f9.ssl.cf3.rackcdn.com/798_d2fd2_8wu8zv4ub01erchtbme1ock76dtg1mhk9fusyfb5vwr8pu1ydn_688x412_9.png" 
      },
      {
          url : "http://wwww.testwebsite.com",
          imageSrc : "https://74bbd17f2e1902a4c028-a6156ca8b78f6368db7d34474b00f9f9.ssl.cf3.rackcdn.com/798_d2fd2_8wu8zv4ub01erchtbme1ock76dtg1mhk9fusyfb5vwr8pu1ydn_688x412_9.png" 
      },
      {

           url : "http://wwww.testwebsite.com",
           imageSrc : "https://74bbd17f2e1902a4c028-a6156ca8b78f6368db7d34474b00f9f9.ssl.cf3.rackcdn.com/798_d2fd2_8wu8zv4ub01erchtbme1ock76dtg1mhk9fusyfb5vwr8pu1ydn_688x412_9.png" 
      },
      {
          url : "http://wwww.testwebsite.com",
          imageSrc : "https://74bbd17f2e1902a4c028-a6156ca8b78f6368db7d34474b00f9f9.ssl.cf3.rackcdn.com/798_d2fd2_8wu8zv4ub01erchtbme1ock76dtg1mhk9fusyfb5vwr8pu1ydn_688x412_9.png" 
      }];

    $http.get('/api/websites').success(function(websites) {
      $scope.websites = websites;
      //socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.$on('$destroy', function () {
      //socket.unsyncUpdates('thing');
    });
  });
