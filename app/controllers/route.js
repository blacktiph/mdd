var btcApp = angular.module('btcApp', ['ngRoute', 'firebase'])

// routeProvider is the factory
btcApp.config(function($routeProvider){
	$routeProvider.when('/',
		{
			controller: 'login',
			templateUrl: 'views/login.html'
		});
	$routeProvider.when('/submit',
		{
			controller: 'leaderboard',
			templateUrl: 'views/submit.html'
		});
	$routeProvider.otherwise({redirectTo: '/'});
});