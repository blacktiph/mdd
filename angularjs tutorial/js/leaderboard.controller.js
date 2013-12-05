var btcApp = angular.module('btcApp', ['ngRoute']);

btcApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			controller: 'leaderboard',
			templateUrl: 'views/submit.html'
		})
		// .when('/login',
		// {
		// 	controller: 'leaderboard',
		// 	templateUrl: '../views/login.html'
		// })
		// .when('/loginSuccess',
		// {
		// 	controller: 'leaderboard',
		// 	templateUrl: '../views/login_success.html'
		// })
		.otherwise({redirectTo: '/'});
});

var controllers = {};

controllers.leaderboard = function($scope){
	$scope.anglers = [
		{name:'John Smith', species:'blacktip', overallLength:78.89, forkLength:67.4, girth:42},
      	{name:'Rob Stuart', species:'blacktip', overallLength:72, forkLength:62, girth:28},
       	{name:'Adam Larson', species:'blacktip', overallLength:74, forkLength:64, girth:35},
       	{name:'Ruby Sue', species:'blacktip', overallLength:65, forkLength:55, girth:26},
       	{name:'Pete Duck', species:'blacktip', overallLength:79, forkLength:71, girth:46, weight: 12}
	];
	$scope.orderGirth = "weight";
	$scope.newEntry = {};
	$scope.newEntry.species = "blacknose";
	$scope.addEntry = function(){
		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.push($scope.newEntry);
		console.log('$scope.newEntry',$scope.newEntry, $scope.anglers);

	};

  	$scope.predicate = 'name';
  	// console.log($scope.predicate);
};

btcApp.controller(controllers);