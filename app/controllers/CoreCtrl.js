btcApp.controller("CoreCtrl", ["$scope","$firebase","$firebaseAuth","$location", function($scope, $firebase,$firebaseAuth,$location) {
        
    $scope.firebaseURL = "https://btc-fullsail.firebaseio.com";

    // var ref = $firebase(new Firebase(firebaseURL)).$bind($scope, 'AppData');

    $scope.anglers = $firebase(new Firebase($scope.firebaseURL+"/entries"));
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));


    var ref = new Firebase($scope.firebaseURL);
    $scope.auth = $firebaseAuth(ref);

    $scope.$on("$firebaseAuth:login", function(e,user){
    	$location.path('/submit');
    });
    
  //   var Watcher = $scope.$watch('AppData', function(){
		// // $scope.AppData.hick = 'up';


  //   	console.log("Here we go!!", $scope.AppData);

  //   	Watcher(); // one time run, then clear watch

  //   });
}]);


