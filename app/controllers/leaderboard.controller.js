btcApp.controller('leaderboard', ['$scope', 'angularFire', function($scope, angularFire) {

	// console.log($scope);

	/*== Firebase ==*/
	var url = new Firebase('https://btc-fullsail.firebaseio.com/');
	var data = angularFire(url, $scope, 'anglers', []);

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