btcApp.controller("CoreCtrl", ["$scope","$firebase","$firebaseAuth","$location", function($scope, $firebase,$firebaseAuth,$location) {
        
    $scope.firebaseURL = "https://btc-fullsail.firebaseio.com";

    $scope.anglers = $firebase(new Firebase($scope.firebaseURL+"/entries"));
    // $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));
    // $scope.users = $firebase(new Firebase($scope.firebaseURL+"/users"));

    var ref = new Firebase($scope.firebaseURL);
    $scope.auth = $firebaseAuth(ref, {path:'/'});

    $scope.$on("$firebaseAuth:login", function(e,user){
        // console.log('logged in');
        // user.pizza = "yum";
        // $scope.users.$add(user);

        console.log(user);

        // pizza = 'submit';

        $scope.user = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/users/'+user.id));
        $scope.user.$on("loaded", function(userLoaded) {
            if(userLoaded === null)
            {
                // console.log('user is not in database');
                userLoaded = {
                    //create specific data
                    authorized: false,
                    email: user.email,
                    name: user.name
                }

                $scope.user.$set(userLoaded);

                // $location.path('/secure');
            }

        });

        $scope.user.$on("change", function(userLoaded) {
            // console.log('$scope.user.authorized',$scope.user.authorized,$scope.user);

            if(!$scope.user.authorized) {
                $location.path('/secure');
            }
            else {
                console.log('user is in database');
                $location.path("/submit");
            }

        });

        // $location.path("/submit");
    });

    $scope.$on("$firebaseAuth:logout", function(e,user){
        console.log('logged out');
        $location.path('/');

    });

}]);


