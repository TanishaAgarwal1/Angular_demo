var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'log.html',
            controller: 'LoginController'
        })
        .when('/dashboard', {
            templateUrl: 'dash.html',
            controller: 'DashboardController'
        })
        .otherwise({
            redirectTo: '/login'
        });
});

app.controller('LoginController', function ($scope, $location, $rootScope) {
    $scope.name = '';

  $scope.submit = function () {
     
        $rootScope.name = $scope.name;
        $location.path('/dashboard');
    };
});

app.controller('DashboardController', function ($scope, $rootScope, $location) {
    
    if (!$rootScope.name) {
         $location.path('/login');
    }
    $scope.name = ''||$rootScope.name;

    $scope.msg = function () {
        window.alert('Hello ' + $scope.name);
    };
});
