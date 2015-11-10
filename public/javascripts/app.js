var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    controller: 'homeController'
  })
  $locationProvider.html5Mode(true)
})

// app.controller('homeController', function($scope, $http){
//   $http.get('/itunes.json').then(function(response){
//     $scope.zenData = response.data.results
//   })

// })


app.controller('homeController', function($scope, $http){
  var allResponses = [];
  var theResponse = '';
  $http.get('https://still-tundra-8387.herokuapp.com/').then(function(response){
    $scope.zenData = response.data
    theResponse = response.data
    allResponses = response.data
  })


  $scope.addPost = function() {
    $scope.post = {id: theResponse.length + 1, name: $scope.name, message: $scope.message}
    allResponses.push($scope.post);
    // $http.post('https://still-tundra-8387.herokuapp.com/', $scope.post)
    $scope.post = {}; 
    $scope.name = '';
    $scope.message = '';
  }
  
})
