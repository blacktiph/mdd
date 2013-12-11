//== Largest Shark
btcApp.controller('leaderboard', ['$scope', '$firebase', function($scope, $firebase) {

	// console.log($scope);

	/*== Firebase ==*/
	// $scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/entries'));

	$scope.orderByLength = "-forkLength";

}]);

//== Largest Blacktip
btcApp.controller('blacktipLeaderBoard', ['$scope', '$firebase', function($scope, $firebase) {

	/*== Firebase ==*/
	// $scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/entries'));

	// console.log($scope.anglers);

	$scope.search = {};

	$scope.search.species = 'Blacktip';

	$scope.orderByWeight = "-weight";

}]);

//== Most Sharks
btcApp.controller('mostSharks', ['$scope', '$firebase', function($scope, $firebase) {

	/*== Firebase ==*/
	// $scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/entries'));

	console.log($scope.anglers);

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