//== Submission Page
btcApp.controller('submission', ['$scope', '$firebase', '$location', 'fileReader', '$routeParams', function($scope, $firebase, $location, fileReader, $routeParams) {

	$scope.newEntry = {};

	$scope.errorMsg = $routeParams.msg;

	//Set default value of dropdown list
	$scope.newEntry.species = "Blacktip";

	//Reset Dropdown
	$scope.dropdown = false;

	/*== Image Uploader ==*/
	$scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
		
		.then(function(result) {

			// test $scope.imageSrc if it is an array / exists
			if($scope.imageSrc == undefined){
				
				// if not, make an array named $scope.imageSrc
				$scope.imageSrc = [];
				// console.log('it is an object');
			}
			
			//push result into array
			$scope.imageSrc.push(result);
		});
    };

	$scope.addEntry = function(){
		//Convert Overall Length to a number
		$scope.newEntry.overallLength = $scope.newEntry.overallLength *1;

		//Convert Fork Length to a number
		$scope.newEntry.forkLength = $scope.newEntry.forkLength *1;

		//Convert Girth to a number
		$scope.newEntry.girth = $scope.newEntry.girth *1;

		//Create estimated weight
		if($scope.newEntry.species == "Blacktip"){
			$scope.newEntry.weight = ($scope.newEntry.girth * $scope.newEntry.girth * $scope.newEntry.forkLength)/800;
		}
		
		$scope.anglers.$add($scope.newEntry);

		$location.path('/success');
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