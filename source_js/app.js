


var app = angular.module('mp3', ['ngRoute']);

// using routeparams for the things after detail which represent the rank

app.config(function ($routeProvider){
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'MainController'
    })
    .when('/gallery',{
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryController'
    })
        .when('/details/:rank', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise('/');

});

