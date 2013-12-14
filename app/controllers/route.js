var btcApp = angular.module('btcApp', ['ngRoute', 'firebase'])

// routeProvider is the factory
btcApp.config(function($routeProvider){
	$routeProvider.when('/',
		{
			controller: 'login',
			// authRequired: false,
			templateUrl: 'views/login.html'
		});
	$routeProvider.when('/secure',
		{
			controller: 'login',
			// authRequired: false,
			templateUrl: 'views/secure.html'
		});
	$routeProvider.when('/submit',
		{
			controller: 'submission',
			// authRequired: true,
			templateUrl: 'views/submit.html'
		});
	$routeProvider.when('/leaderboards',
		{
			controller: 'leaderboard',
			// authRequired: true,
			templateUrl: 'views/leaderboards.html'
		});
	$routeProvider.when('/submit/file/success',
		{
			controller: 'submission',
			// authRequired: true,
			templateUrl: 'views/submit.html'
		});
	$routeProvider.when('/submit/file/error/:msg',
		{
			controller: 'submission',
			// authRequired: true,
			templateUrl: 'views/submit.html'
		});
	$routeProvider.otherwise({redirectTo: '/'});
});