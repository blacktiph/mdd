var btcApp = angular.module('btcApp', ['ngRoute', 'firebase']);

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

btcApp.controller("leaderboard", ["$scope", "$firebase", function($scope, $firebase) {
		$scope.anglers = [
			{name:'John Smith', species:'blacktip', overallLength:78.89, forkLength:67.4, girth:42, weight: 110},
	      	{name:'Rob Stuart', species:'blacktip', overallLength:72, forkLength:62, girth:28, weight: 190},
	       	{name:'Adam Larson', species:'blacktip', overallLength:74, forkLength:64, girth:35, weight: 160},
	       	{name:'Ruby Sue', species:'blacktip', overallLength:65, forkLength:55, girth:26, weight: 60},
	       	{name:'Pete Duck', species:'blacktip', overallLength:79, forkLength:71, girth:46, weight: 90}
		];

		$scope.orderByWeight = "-weight";

		$scope.newEntry = {};

		//Set default value of dropdown list
		$scope.newEntry.species = "blacknose";

		$scope.addEntry = function(){
			$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
			$scope.anglers.push($scope.newEntry);
			console.log('$scope.newEntry',$scope.newEntry, $scope.anglers);

		};
}]);

.run(['angularFireAuth', 'FBURL', '$rootScope', function(angularFireAuth, FBURL, $rootScope) {
  	angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
 	$rootScope.FBURL = FBURL;
}]);

// var controllers = {};

// controllers.leaderboard = function($scope){
// 	$scope.anglers = [
// 		{name:'John Smith', species:'blacktip', overallLength:78.89, forkLength:67.4, girth:42, weight: 110},
//       	{name:'Rob Stuart', species:'blacktip', overallLength:72, forkLength:62, girth:28, weight: 190},
//        	{name:'Adam Larson', species:'blacktip', overallLength:74, forkLength:64, girth:35, weight: 160},
//        	{name:'Ruby Sue', species:'blacktip', overallLength:65, forkLength:55, girth:26, weight: 60},
//        	{name:'Pete Duck', species:'blacktip', overallLength:79, forkLength:71, girth:46, weight: 90}
// 	];

// 	$scope.orderByWeight = "-weight";

// 	$scope.newEntry = {};

// 	//Set default value of dropdown list
// 	$scope.newEntry.species = "blacknose";

// 	$scope.addEntry = function(){
// 		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
// 		$scope.anglers.push($scope.newEntry);
// 		console.log('$scope.newEntry',$scope.newEntry, $scope.anglers);

// 	};
// };

// btcApp.controller(controllers);