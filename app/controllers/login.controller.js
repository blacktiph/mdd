btcApp.controller("login", ["$scope","$firebase", "$firebaseAuth",
    function($scope, $firebase, $firebaseAuth) {
        
        var firebaseURL = "https://btc-fullsail.firebaseio.com";

        var ref = new Firebase(firebaseURL);
        $scope.auth = $firebaseAuth(ref);

    }
]);


