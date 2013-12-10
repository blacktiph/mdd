btcApp.controller('leaderboard', ['$scope', '$firebase', function($scope, $firebase) {

	// console.log($scope);

	/*== Firebase ==*/
	$scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/'));

	$scope.orderByWeight = "-forkLength";

	$scope.newEntry = {};

	//Set default value of dropdown list
	$scope.newEntry.species = "blacknose";

	$scope.addEntry = function(){
		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.$add($scope.newEntry);
	};

 }]);

//Largest Blacktip
btcApp.controller('blacktipLeaderBoard', ['$scope', '$firebase', function($scope, $firebase) {

	/*== Firebase ==*/
	$scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/'));

	console.log($scope.anglers);

	$scope.orderByWeight = "-weight";

 }]);

//This will filter and order the objects in the array (weight, overallLength, etc...)
btcApp.filter('toArray', function () {
	'use strict';

	return function (obj) {
		if (!(obj instanceof Object)) {
			return obj;
		}

		return Object.keys(obj).filter(function(key) {
			return key.charAt(0) !== "$";
		}).map(function (key) {
			return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
		});
	}
});