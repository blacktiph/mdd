btcApp.controller('leaderboard', ['$scope', '$firebase', function($scope, $firebase) {

	// console.log($scope);

	/*== Firebase ==*/
	$scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/'));

    $scope.orderByWeight = "-weight";

	$scope.newEntry = {};

	//Set default value of dropdown list
	$scope.newEntry.species = "blacknose";

	$scope.addEntry = function(){
		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.$add($scope.newEntry);
	};

 }]);