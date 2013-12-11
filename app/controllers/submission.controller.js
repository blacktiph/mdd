//== Submission Page
btcApp.controller('submission', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {

	// console.log($scope);

	/*== Firebase ==*/
	$scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/entries'));

	$scope.newEntry = {};

	//Set default value of dropdown list
	$scope.newEntry.species = "Blacktip";

	// console.log($scope.anglers.length);

	$scope.addEntry = function(){
		validate($scope);

		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.$add($scope.newEntry);

		$location.path('/leaderboards');
	};

}]);

var validate = function($scope){
	// console.log('validate form function');
	// console.log($scope);

	var nameAndTeam = document.querySelector('#anglerName');
	// console.log(nameAndTeam);
}