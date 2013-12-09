// btcApp.controller("leaderboard", ["$scope", "angularFire", function ($scope, angularFire) {
	
// 	// console.log('leaderboard controller');

// 	/*== Firebase ==*/
// 	var url = 'https://btc-fullsail.firebaseio.com/';
// 	var data = angularFire(url, $scope, 'anglers', []);

// 	//Create object to contain the angler entry information
// 	$scope.anglers = {};

// 	data.then(function() {
//     	openEntry($scope);
//     });

// 	$scope.orderByWeight = "-weight";

// 	$scope.newEntry = {};

// 	//Set default value of dropdown list
// 	$scope.newEntry.species = "blacknose";
	
// }]);

// console.log(btcApp.controller());

btcApp.controller('leaderboard', ['$scope', 'angularFire', function($scope, angularFire) {

	// console.log($scope);

	var url = new Firebase('https://btc-fullsail.firebaseio.com/');
	var data = angularFire(url, $scope, 'anglers', []);

	// var data = $firebase(dataUrl, $scope, 'anglers', []);
	// $scope.data = $firebase(dataUrl);
    
	/*== Firebase ==*/
 //    var url = 'https://btc-fullsail.firebaseio.com/';
	// var data = $firebase(url, $scope, 'anglers', []);
    
    //Create object to contain the angler entry information
    $scope.anglers = {};

    data.then(function() {
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