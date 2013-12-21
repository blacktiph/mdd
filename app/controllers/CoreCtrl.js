btcApp.controller("CoreCtrl", ["$scope","$firebase","$firebaseAuth","$location", function($scope, $firebase,$firebaseAuth,$location) {
        
    $scope.firebaseURL = "https://btc-fullsail.firebaseio.com";

    $scope.anglers = $firebase(new Firebase($scope.firebaseURL+"/entries"));

    var ref = new Firebase($scope.firebaseURL);
    $scope.auth = $firebaseAuth(ref, {path:'/'});

    //Login function call
    $scope.login = function()
    {
        $scope.auth.$login('facebook',{ scope: 'email' }).then(function(){
             $location.path('/submit');
        })
    }

    //Firebase Authentication
    $scope.$on("$firebaseAuth:login", function(e,user){

        $scope.user = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/users/'+user.id));
        $scope.user.$on("loaded", function(userLoaded) {
            if(userLoaded === null)
            {
                userLoaded = {
                    //create specific data
                    authorized: false,
                    email: user.email,
                    name: user.name
                }

                $scope.user.$set(userLoaded);
            }
        });

        // On Change
        $scope.user.$on("change", function(userLoaded) {

            if(!$scope.user.authorized) {
                $location.path('/secure');
            }

        });
    });

    //Log Out
    $scope.$on("$firebaseAuth:logout", function(e,user){
        $location.path('/');

    });

}]);


