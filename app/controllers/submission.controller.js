//== Submission Page
btcApp.controller('submission', ['$scope', '$firebase', '$location', 'fileReader', function($scope, $firebase, $location, fileReader) {

	// console.log($scope);

	/*== Firebase ==*/
	// $scope.anglers = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/entries'));

	$scope.newEntry = {};

	//Set default value of dropdown list
	$scope.newEntry.species = "Blacktip";

	// console.log($scope.anglers.length);


	/*== Image Uploader ==*/
	$scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
		
		.then(function(result) {

			// var testArray = [result];
			// console.log('test array -----', typeof testArray);

			

			// test $scope.imageSrc if it is an array / exists
			if($scope.imageSrc == undefined){
				// if not, make an array named $scope.imageSrc
				$scope.imageSrc = [];
				console.log('it is an object');
			}
			
			//push result into array
			$scope.imageSrc.push(result);
		});
    };

	$scope.addEntry = function(){
		validate($scope);

		$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		$scope.anglers.$add($scope.newEntry);

		$location.path('/leaderboards');
	};

}]);

btcApp.directive('ngFileSelect', function(){

	return {
		link: function($scope, el){
			el.bind("change", function(e){
				$scope.file = (e.srcElement || e.target).files[0];
				$scope.getFile();
			});
		}
	};

});

var validate = function($scope){
	// console.log('validate form function');
	// console.log($scope);

	var nameAndTeam = document.querySelector('#anglerName');
	// console.log(nameAndTeam);
}