var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    controller: 'homeController'
  })
  $locationProvider.html5Mode(true)
})


app.controller('homeController', function($scope, $http, cartService, $rootScope){

  })
