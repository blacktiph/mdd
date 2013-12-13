//== Largest Shark
btcApp.controller('leaderboard', ['$scope', '$firebase', function($scope, $firebase) {

	$scope.orderByLength = "-overallLength";

}]);

//== Largest Blacktip
btcApp.controller('blacktipLeaderBoard', ['$scope', '$firebase', function($scope, $firebase) {

	$scope.search = {};

	$scope.search.species = 'Blacktip';

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