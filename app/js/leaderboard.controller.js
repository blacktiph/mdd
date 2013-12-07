var btcApp = angular.module('btcApp', ['ngRoute', 'firebase']);

btcApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			controller: 'leaderboard',
			templateUrl: 'views/login.html'
		})
		.when('/submit',
		{
			controller: 'leaderboard',
			templateUrl: 'views/submit.html'
		})
		.otherwise({redirectTo: '/'});
});

btcApp.controller("leaderboard", ["$scope", "angularFire", function($scope, angularFire) {

	/*== Firebase ==*/
	var url = 'https://btc-fullsail.firebaseio.com/';
	var angularFire = angularFire(url, $scope, 'anglers', []);

	$scope.anglers = {};

	angularFire.then(function() {
    	openEntry($scope);
    });

	$scope.orderByWeight = "-weight";

	$scope.newEntry = {};

	//Set default value of dropdown list
	$scope.newEntry.species = "blacknose";
	
}]);

function openEntry($scope){
	$scope.addEntry = function(){
		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.push($scope.newEntry);
		// console.log('$scope.newEntry',$scope.newEntry, $scope.anglers);
	};
}


/*========= Fire Base =========*/

// var firebaseData = new Firebase('https://fullsail-blacktiph.firebaseio.com/');
// var currentUser = {};

// $('#fb_login').click(function(){

// 	auth.logout();
// 	if($(this).html() == "Facebook Login"){
// 		// console.log('Login is the correct value');
// 		auth.login("facebook");	
// 	}
// 	else {
//     	currentUser = {};

//     	//Change HTML to show "Login" instead on "Log Out"
//     	$('#fb_login').html("Facebook Login");

//     	// console.log(user);
// 	}
// });

// var auth = new FirebaseSimpleLogin(firebaseData, function(error, user) {
// 	if(error) {
// 		// an error occurred while attempting login

//     	switch(error.code) {
//       		case 'INVALID_EMAIL':
//       		case 'INVALID_PASSWORD':
//       		default:
//     	}
//   	}
//   	else if(user && (user['provider'] == "facebook")) {

//     	//Remove error from comment section
//     	$('.commentError').css('display','none');

//     	//Change HTML to show "Log Out" instead on "Login"
//     	$('#fb_login').html("Facebook Log Out");

//     	currentUser = user;

//     	console.log(user);
//   	}
// });







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