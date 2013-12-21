var btcApp = angular.module('btcApp', ['ngRoute', 'firebase']);

// routeProvider is the factory
btcApp.config(function($routeProvider){
	$routeProvider.when('/',
		{
			controller: 'login',
			authRequired: false,
			templateUrl: 'views/login.html'
		});
	//Secure Page
	$routeProvider.when('/secure',
		{
			controller: 'login',
			authRequired: true,
			templateUrl: 'views/secure.html'
		});
	//Submissions Page
	$routeProvider.when('/submit',
		{
			controller: 'submission',
			authRequired: true,
			templateUrl: 'views/submit.html'
		});
	//When Submissions if successful
	$routeProvider.when('/success',
		{
			controller: 'leaderboard',
			authRequired: true,
			templateUrl: 'views/success.html'
		});
	//Leaderboards page
	$routeProvider.when('/leaderboards',
		{
			controller: 'leaderboard',
			authRequired: true,
			templateUrl: 'views/leaderboards.html'
		});
	$routeProvider.otherwise({redirectTo: '/'});
});