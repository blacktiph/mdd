//== Largest Shark
btcApp.controller('leaderboard', ['$scope', '$location', '$firebase', function($scope, $location, $firebase) {

	$scope.orderByLength = "-overallLength";

	//Reset Dropdown
    $scope.dropdown = false;

    //Change location to submit for success page
    $scope.addMoreSubmissions = function(){
    	$location.path('/submit');
    };

     //Change location to leaderboards for success page
    $scope.checkOutLeaders = function(){
    	$location.path('/leaderboards');
    };

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