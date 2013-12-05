var btcApp = angular.module('btcApp', []);

btcApp.controller('leaderBoardController', function($scope){
	$scope.anglers = [
		{name:'John Smith', species:'blacktip', overallLength:78.89, forkLength:67.4, girth:42},
      	{name:'Rob Stuart', species:'blacktip', overallLength:72, forkLength:62, girth:28},
       	{name:'Adam Larson', species:'blacktip', overallLength:74, forkLength:64, girth:35},
       	{name:'Ruby Sue', species:'blacktip', overallLength:65, forkLength:55, girth:26},
       	{name:'Pete Duck', species:'blacktip', overallLength:79, forkLength:71, girth:46}
	]

	var girth = $scope.anglers[0].girth;
	// console.log('Girth:', girth);

	var fork = $scope.anglers[0].forkLength;
	// console.log('Fork Length:', fork);

	var weight = (girth*girth*fork)/800;
	// console.log('Weight:', weight);

	//*= Add weight to the object
	$scope.anglers[0].weight = weight;
	// console.log($scope.anglers[0]);

  	$scope.predicate = 'name';
  	// console.log($scope.predicate);
});

// function Entries($scope) {
  	
// }