btcApp.controller("CoreCtrl", ["$scope","$firebase","$firebaseAuth","$location", function($scope, $firebase,$firebaseAuth,$location) {
        
    $scope.firebaseURL = "https://btc-fullsail.firebaseio.com";

    // var ref = $firebase(new Firebase(firebaseURL)).$bind($scope, 'AppData');

    $scope.anglers = $firebase(new Firebase($scope.firebaseURL+"/entries"));
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));


    var ref = new Firebase($scope.firebaseURL);
    $scope.auth = $firebaseAuth(ref, {path:'/'});

    $scope.$on("$firebaseAuth:login", function(e,user){
        console.log('logged in');
    	$location.path('/submit');
    });

    $scope.$on("$firebaseAuth:logout", function(e,user){
        console.log('logged out');
        $location.path('/');

    });

}]);


