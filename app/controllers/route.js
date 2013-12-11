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
			controller: 'submission',
			templateUrl: 'views/submit.html'
		});
	$routeProvider.when('/leaderboards',
		{
			controller: 'leaderboard',
			templateUrl: 'views/leaderboards.html'
		});
	$routeProvider.otherwise({redirectTo: '/'});
});