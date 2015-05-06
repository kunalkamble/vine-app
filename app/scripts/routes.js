// ROUTES
vineApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'popularController'
    })
    .when('/timeline', {
        templateUrl: 'views/userTimeline.html',
        controller: 'userTimelineController'
    })
    .when('/hashtag/:tag', {
        templateUrl: 'views/tag.html',
        controller: 'tagController'
    })
    .when('/apiResult', {
        templateUrl: 'views/apiResult.html',
        controller: 'apiResultController'
    })
    
});

var APIKEY = "";

// HEADER - common headers for all API requests 
vineApp.config(function($httpProvider) {
    $httpProvider.interceptors.push(function($q) {
        return {
            'request': function(config) {
            config.headers['X-Mashape-Key'] = APIKEY;
            config.headers['accept'] = 'application/json';
                return $q.when(config);
            }
        };
    });
});