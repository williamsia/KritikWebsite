'use strict';

angular.module('kritikWebsiteApp')
    .factory('Website', function ($resource) {
        return $resource('/api/websites/:id/:controller', {
                id: '@_id'
            },
            {
                get: {
                    method: 'GET',
                    params: {
                        id:'me'
                    }
                }
            });
    });
